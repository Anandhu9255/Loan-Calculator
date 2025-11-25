import express from 'express';
import cors from 'cors';
import loanRoutes from './routes/loan.route';
import { setupSwagger } from './swagger';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = Number(process.env.PORT) || 10000;

// Allowed origins: use BASE_URL if provided, otherwise include localhost dev urls
const allowedOrigins = [
  'http://localhost:5173', // local frontend (change if yours differs)
  'http://localhost:10000', // local swagger access
];

if (process.env.BASE_URL) {
  // ensure no trailing slash
  const base = process.env.BASE_URL.replace(/\/$/, '');
  allowedOrigins.push(base);
  allowedOrigins.push(`${base}/api`);
}

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like curl, postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        return callback(new Error('CORS policy: origin not allowed'), false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json());

// Swagger setup
setupSwagger(app);

// Routes
app.use('/api/loan', loanRoutes);

// Error handling middleware
app.use(errorHandler);

console.log('Starting server...');
app.listen(PORT, () => {
  const base = process.env.BASE_URL ? process.env.BASE_URL.replace(/\/$/, '') : `http://localhost:${PORT}`;
  console.log(`Server is running on port ${PORT}`);
  console.log(`API base URL: ${base}/api`);
  console.log(`API Documentation available at ${base}/api-docs`);
});
