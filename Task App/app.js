require('./db/mongoose');
const express = require('express');
const userRoute = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

// Register the function as middleware for the application
const loggerMiddleware = (req, res, next) => {
    console.log('New request to: ' + req.method + ' ' + req.path);
    next();
}

app.use(loggerMiddleware);
app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    console.log('Server is up on port 3000.');
});