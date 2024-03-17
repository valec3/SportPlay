import { configDb } from '../config/envs.js';

export const database = {
    connectionLimit: 10,
    ...configDb,
};
