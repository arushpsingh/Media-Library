import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB, () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
