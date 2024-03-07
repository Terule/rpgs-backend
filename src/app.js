const express = require('express')
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = app;