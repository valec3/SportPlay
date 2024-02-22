import { v2 as cloudinary } from 'cloudinary';
import { configCloudinary } from '../config/envs.js';

cloudinary.config(configCloudinary);

export async function uploadImage(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'sports-db'
    });
}
