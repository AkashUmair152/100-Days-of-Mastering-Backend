import { asyncHandler } from '../utils/asyncHandler.js';
import {ApiError} from "../utils/ApiError.js";
import {User} from '../models/user.model.js';
import {uploadImageOnCloudinry} from '../utils/cloudinary.js';
import {ApiResponse} from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
  
  //  get user data from frontend 
   let {username, email, fullName, avatar, coverImage, password} = req.body;
  //  validations of user data - not empty 
  if ([username, email, fullName, password].some(field => field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user already exists
  let existedUser = User.findOne({
    $or: [{ username }, { email }]
  });
  if (existedUser) {
    throw new ApiError(409, "User already exists with this username or email");
  }
  // check images and avtar 
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar image are required");
  } 
  //  upload images to cloudinary

  const avatarImage = await uploadImageOnCloudinry(avatarLocalPath);
  const coverImageUrl = await uploadImageOnCloudinry(coverImageLocalPath);

  if (!avatarImage) {
    throw new ApiError(500, "Failed to upload avatar image");
  }
  

  //  create user object - create entery in database
  const user = await User.create({
    username: username.toLowerCase(),
    email: email.toLowerCase(),
    fullName,
    avatar: avatarImage.secure_url || avatarImage.url,
    coverImage: coverImageUrl ? coverImageUrl.secure_url || coverImageUrl.url : null,
    password,
  })

    // check for user creation
  const createdUser = User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  //  return response

  return res.status(201).json(
    new ApiResponse(201, createdUser, "User registered successfully")
  );


});

export { registerUser };
