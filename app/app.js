const express = require('express');
const app = express();


const endpoints = require('./app/routes/endpoints');

app.use('/api/', endpoints);

module.exports = app;