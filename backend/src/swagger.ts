import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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
        url: 'http://localhost:10000',
        description: 'Local server',
      },
      {
        url: 'https://loan-calculator-4g3z.onrender.com',  // <== YOUR RENDER URL
        description: 'Production server',
      },
    ],
  },

  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/**/*.ts'],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: any) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
