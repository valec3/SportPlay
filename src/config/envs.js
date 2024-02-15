export const configDb = {
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'toor',
    database: process.env.DATABASE_NAME || 'tournament',
    port: process.env.DATABASE_PORT || 3306,
};
export const PORT = process.env.PORT || 3000;
export const SECRET = process.env.SECRET;
