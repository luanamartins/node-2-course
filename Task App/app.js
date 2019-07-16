const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./routes/user');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const app = express();

app.use(express.json());
app.use(userRoute);

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});