import { pool } from '../db/index.js';

export const register = (req, res) => {
    res.json({
        message: 'Register',
    });
};

export const login = (req, res) => {
    res.json({
        message: 'Login',
    });
};

export const logout = (req, res) => {
    const query = 'show tables;';
    pool.query(query)
        .then((result) => {
            res.json(result[0]);
        })
        .catch((error) => {
            res.json(error);
        });
};

export const exampleOfQuery = (req, res) => {
    const query = 'show tables;';
    pool.query(query)
        .then((result) => {
            res.json(result[0]);
        })
        .catch((error) => {
            res.json(error);
        });
};
