import { SECRET } from '../config/envs.js';
import { loginService, registerService } from '../services/auth.services.js';

export const register = async (req, res) => {
    try {
        const data = await registerService(req.body);
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { data, token, message } = await loginService(req.body);
        res.cookie(SECRET, token);
        res.json({ data, message, token });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const profile = (req, res) => {
    res.json(req.user);
};

export const logout = (req, res) => {
    res.clearCookie(SECRET);
    res.json({ message: 'User logged out successfully' });
};
