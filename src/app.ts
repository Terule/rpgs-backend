import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from '@routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.use('/user', userRoute);


export default app;