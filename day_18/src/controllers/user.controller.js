import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadImageOnCloudinry } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}


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

//   login user method start here

const loginUser = asyncHandler(async (req, res) => {
    // user data from request body
    const {email, username, password} =req.body;
    
    // find user by email or username
    if (!email && !username) {
        throw new ApiError(400, "Email or username is required");
    }
    const user = await User.findOne({
        $or: [{ email: email?.toLowerCase() }, { username: username?.toLowerCase() }]
    }).select("+password");
    if (!user) {
        throw new ApiError(404, "User not found");
    }
     // check password
   const isPasswordValid = await user.isPasswordCorrect(password);
   if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password");
    }
    // generate token
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id);
   
    const logedInUser = await User.findById(user._id).select("-password -refreshToken").lean();
    if (!logedInUser) {
        throw new ApiError(500, "Failed to login user");
    }
 // send response with user data and token cookies
    const cookieOptions = {
        httpOnly: true,
        secure: true
    };
    res.cookie("accessToken", accessToken, cookieOptions);
    res.cookie("refreshToken", refreshToken, cookieOptions);
    return res
        .status(200)
        .json(new ApiResponse(200, logedInUser, accessToken, refreshToken, "User logged in successfully"));

   
}); 
// logout user method start here

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const cookieOptions = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "User logged Out"))
})


export { registerUser, loginUser, logoutUser };
