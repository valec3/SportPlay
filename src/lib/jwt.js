import jwt from 'jsonwebtoken';
import { SECRET } from '../config/envs.js';
export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            SECRET,
            {
                expiresIn: '10h',
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            },
        );
    });
}
