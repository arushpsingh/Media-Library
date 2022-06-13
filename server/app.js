import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import postsRoutes from './routes/posts.js';

const app = express();

// middlewares
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// route
app.use('/posts', postsRoutes);

export default app;
