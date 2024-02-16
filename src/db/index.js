import { createPool } from 'mysql2/promise';
import { database } from './config.js';
console.log(database);
export const pool = createPool(database);
