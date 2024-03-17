import jwt from 'jsonwebtoken';

import { SECRET } from '../config/envs.js';
export const validatorJwt = (req, res, next) => {
    const accessToken =
        req.cookies?.token ??
        req.headers[SECRET] ??
        req.headers.authorization?.split(' ')[1] ??
        null;
    if (!accessToken)
        return res.status(401).json({ message: 'User not authenticated' });
    try {
        const decoded = jwt.verify(accessToken, SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'User not authenticated' });
    }
};
