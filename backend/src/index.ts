import express from 'express';
import cors from 'cors';
import loanRoutes from './routes/loan.route';
import { setupSwagger } from './swagger';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger setup
setupSwagger(app);

// Routes
app.use('/api/loan', loanRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
console.log('Starting server...');
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
