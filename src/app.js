import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import AuthRoutes from './routes/auth.routes.js';

const app = express();

// ver logs de las peticiones
app.use(morgan('dev'));
// habilitar CORS
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3100',
            'https://spor7play.vercel.app',
        ],
        optionsSuccessStatus: 200,
    }),
);

// habilitar express.json
app.use(express.json());

// Rutas de nuestra aplicación
app.use('/api/auth', AuthRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my application',
    });
});

export default app;
