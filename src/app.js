import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import AuthRoutes from './routes/auth.routes.js';
import TournamentRoutes from './routes/tournament.routes.js';
import fileUpload from 'express-fileupload';

const app = express();

// ver logs de las peticiones
app.use(morgan('dev'));
// habilitar CORS
app.use(
    cors({
        origin: 'http://localhost:3100',
        optionsSuccessStatus: 200,
    }),
);
// habilitar express.json
app.use(express.json());
//Configuracion para express-fileUpload para subir imagenes
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}))

// Rutas de nuestra aplicación
app.use('/api/auth', AuthRoutes);
app.use('/api/tournament', TournamentRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my application',
    });
});

export default app;
