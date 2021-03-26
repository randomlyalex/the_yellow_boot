const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.listen(SERVER_PORT, () =>
	console.log(`Server listening on ${SERVER_PORT}`)
);
