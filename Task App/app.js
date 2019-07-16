const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./routes/user');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const app = express();

// Register the function as middleware for the application
const loggerMiddleware = (req, res, next) => {
    console.log('New request to: ' + req.method + ' ' + req.path);
    next();
}

app.use(loggerMiddleware);
app.use(express.json());
app.use(userRoute);

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});