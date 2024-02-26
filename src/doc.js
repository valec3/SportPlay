import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

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
        tags: [
            { name: 'user', description: 'Operations about user' },
            { name: 'teams', description: 'Everything about your Pets' },
            { name: 'tournaments', description: 'Operations about tournaments', },
        ],
    },

    apis: ['./src/docs/*.yaml'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export const swaggerDocs = (app, port) => {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
