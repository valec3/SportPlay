import cloudinary from '../lib/cloudinary.js'

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
        }
        
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageUrl = result.secure_url;
        
        // Aquí puedes guardar la URL de la imagen en tu base de datos
        // Por ejemplo:
        // await guardarUrlEnBaseDeDatos(imageUrl);
        
        return res.status(201).json({ imageUrl });
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
