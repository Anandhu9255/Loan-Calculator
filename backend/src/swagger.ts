import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const serverUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://loan-calculator-4g3z.onrender.com/api'
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
