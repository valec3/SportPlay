import dotenv from 'dotenv';
dotenv.config();

export const configDb = {
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'toor',
    database: process.env.DATABASE_NAME || 'tournament',
    port: process.env.DATABASE_PORT || 3306,
};
export const PORT = process.env.PORT || 3100;
export const SECRET = process.env.SECRET;


export const configCloudinary = {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
};