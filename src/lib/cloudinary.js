import { v2 as cloudinary } from 'cloudinary';
import configCloudinary from '../config/envs.js';


cloudinary.config(configCloudinary);

export const uploadImage = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.path);
        return { imageUrl: result.secure_url };
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
        throw new Error('Error interno del servidor');
    }
};