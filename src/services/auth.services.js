import { createAccessToken } from '../lib/jwt.js';
import { hashPassword, comparePassword } from '../helps/hashPassword.js';
import { pool } from '../db/index.js';

export const loginService = async (user) => {
    const query = 'SELECT * FROM users WHERE email = ?;';
    const { email, password } = user;
    const [userFind] = await pool.query(query, [email]);
    if (!userFind) return res.json({ message: 'User does not exist' });
    const matchPassword = comparePassword(password, userFind[0].password);
    if (!matchPassword) return res.json({ message: 'Invalid password' });
    const token = await createAccessToken({ id: userFind[0].id });

    return {
        message: 'User logged in successfully',
        data: {
            ...userFind[0],
            password: 'hidden',
        },
        token,
    };
};

export const registerService = async (user) => {
    const { email, password, dni, first_name, last_name } = user;
    const [userExists] = await pool.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
    );
    if (userExists.length > 0) throw new Error('User already exists');
    const hashedPassword = hashPassword(password);
    const query = `INSERT INTO users (email, password, dni, first_name, last_name) VALUES ('${email}', '${hashedPassword}', '${dni}', '${first_name}', '${last_name}');`;
    const [response] = await pool.query(query);
    if (!response) throw new Error('Internal server error');
    const [userCreated] = await pool.query(
        'SELECT id FROM users WHERE email = ?',
        [email],
    );
    const token = await createAccessToken({ id: userCreated[0].id });
    return {
        message: 'User registered successfully',
        data: {
            token,
        },
    };
};
