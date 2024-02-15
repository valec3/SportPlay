import { Router } from 'express';
import { register, login, logout } from '../controllers/auth.controller.js';

const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Auth routes works!',
    });
});
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router;
