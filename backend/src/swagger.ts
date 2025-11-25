import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const baseFromEnv = process.env.BASE_URL; // set this on Render to your rendered URL (no trailing slash)

const serverUrl = baseFromEnv
  ? `${baseFromEnv.replace(/\/$/, '')}/api` // use provided URL and append /api
  : 'http://localhost:10000/api';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Loan Calculator API',
      version: '1.0.0',
      description: 'API for calculating loan EMI and amortization schedule',
    },
    servers: [
      {
        url: serverUrl,
        description: 'API Server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/**/*.ts'],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: any) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
