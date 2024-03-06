import express, { Request, Response } from 'express'
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello, world!' });
});

export default app;