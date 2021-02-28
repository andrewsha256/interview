const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const services = require('./services');
const dataRouterFactory = require('./routes/factory');
const route = require('./routes/router');

app.use('/', dataRouterFactory(services));
//app.use('/', route);

module.exports = app;
