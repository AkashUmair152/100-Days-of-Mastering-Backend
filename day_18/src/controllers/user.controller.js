import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadImageOnCloudinry } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;

  // Validation
  if ([username, email, fullName, password].some(field => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ username }, { email }]
  });
  if (existedUser) {
    throw new ApiError(409, "User already exists with this username or email");
  }

  // File paths from Multer
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar image is required");
  }

  // Upload to Cloudinary
  const avatarImage = await uploadImageOnCloudinry(avatarLocalPath);
  const coverImageUrl = coverImageLocalPath
    ? await uploadImageOnCloudinry(coverImageLocalPath)
    : null;

  if (!avatarImage) {
    throw new ApiError(500, "Failed to upload avatar image");
  }

  // Create user
  const user = await User.create({
    username: username.toLowerCase(),
    email: email.toLowerCase(),
    fullName,
    avatar: avatarImage.secure_url || avatarImage.url,
    coverImage: coverImageUrl ? coverImageUrl.secure_url || coverImageUrl.url : null,
    password
  });

  // Fetch clean user object (excluding sensitive fields)
  const createdUser = await User.findById(user._id).select("-password -refreshToken").lean();
  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  // Send response
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

export { registerUser };
