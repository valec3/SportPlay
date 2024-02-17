import { Router } from 'express';
import {
    register,
    login,
    logout,
    profile,
} from '../controllers/auth.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';

const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Auth routes works!',
    });
});
router.post('/register', register);
router.post('/login', login);
router.get('/profile', validatorJwt, profile);
router.get('/logout', logout);

export default router;
