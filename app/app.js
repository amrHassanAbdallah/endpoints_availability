const express = require('express');
const app = express();


const endpoints = require('./routes/endpoints');

app.use('/api/', endpoints);

module.exports = app;