const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const User = require('./models/User');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});