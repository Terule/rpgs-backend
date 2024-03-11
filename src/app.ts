import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from '@routes/userRoutes';
import authRoute from '@routes/authRoutes';
import registerRoute from '@routes/registerRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/register', registerRoute);


export default app;