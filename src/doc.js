import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import e from 'express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API SportPlay',
            version: '1.0.0',
            description: 'API para la gestion de torneos de futbol',
            contact: {
                name: 'Javier',
                email: '',
            },
        },
        servers: [
            {
                url: 'http://localhost:3100',
                description: 'Development server',
            },
            {
                url: 'https://tournament-sport.onrender.com',
                description: 'Production server',
            },
        ],
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export const swaggerDocs = (app, port) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
