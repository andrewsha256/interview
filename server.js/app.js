const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const services = require('./services');
const asyncAwaitFactory = require('./routes/asyncawait-factory');
const asyncAwaitRouter = require('./routes/asyncawait-router');
const promiseRouter = require('./routes/promise-router');

app.use('/asyncawait-factory', asyncAwaitFactory(services));
app.use('/asyncawait-router', asyncAwaitRouter);
app.use('/promise-router', promiseRouter);

module.exports = app;
