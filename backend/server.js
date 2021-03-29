const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connect = require('./db/config/connect.js');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const basketRoutes = require('./routes/basketRoutes');

connect();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API backend running...' });
});

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', basketRoutes);

const SERVER_PORT = process.env.SERVER_PORT || 4000;
app.listen(SERVER_PORT, () =>
  console.log(`Server listening on ${SERVER_PORT}`)
);
