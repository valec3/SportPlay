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

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *     cookieAuth:
 *       type: apiKey
 *       in: cookie
 *       name: mysecret
 */

/**
 * @openapi
 *   /api/auth/register:
 *     post:
 *       summary: Register a new user
 *       responses:
 *          200:
 *           description: User registered successfully
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 first_name:
 *                   type: string
 *                 last_name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 dni:
 *                   type: string
 *
 */
router.post('/register', register);
/**
 * @openapi
 *   /api/auth/login:
 *     post:
 *       summary: Login a user
 *       responses:
 *         200:
 *           description: User logged in successfully
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *       headers:
 *         Set-Cookie:
 *           description: Token
 *           schema:
 *            type: string
 *            required: true
 *
 */
router.post('/login', login);
/**
 * @openapi
 *   /api/auth/profile:
 *     get:
 *       summary: Get user profile
 *       responses:
 *          200:
 *            description: User profile
 *            headers:
 *              Authorization:
 *                description: Token
 *                schema:
 *                  type: string
 *                required: true
 *       security:
 *         - bearerAuth: []
 *         - cookieAuth: []
 */
router.get('/profile', validatorJwt, profile);
router.get('/logout', logout);

export default router;
