require('dotenv').config();
require('./src/db/mongoose');
const express = require('express');

const userRouter = require('./src/routers/user');
const taskRouter = require('./src/routers/task');

const app = express();
const port = process.env.PORT || 3000;

// Register the function as middleware for the application
const loggerMiddleware = (req, res, next) => {
    console.log('New request to: ' + req.method + ' ' + req.path);
    next();
}

app.use(loggerMiddleware);
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port 3000.');
});