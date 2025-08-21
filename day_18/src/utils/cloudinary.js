import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET
    });

 const uploadImageOnCloudinry = async (filePath) => {
    if (!filePath) return null;
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'public', // Optional: specify a folder in Cloudinary
            resource_type: 'auto' // Automatically determine the resource type (image, video, etc.)
        });
        console.log("Image uploaded successfully:", result.secure_url || result.url);
        
        fs.unlinkSync(filePath); // Remove the file after upload
        return result;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
}

export { uploadImageOnCloudinry };
