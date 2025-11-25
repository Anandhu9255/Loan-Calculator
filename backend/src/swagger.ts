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
        url: process.env.BASE_URL || 'http://localhost:5000',
        description: 'API server',
      },
    ],
  },
  // FIXED: More reliable path matching for TS environments
  apis: [
    './src/routes/*.ts',
    './src/controllers/*.ts',
    './src/**/*.ts'  // <— this guarantees Swagger finds everything
  ],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: any) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
