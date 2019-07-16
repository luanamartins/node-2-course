const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const User = require('./models/User');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id // Access the id provided
    User.findById(_id).then((user) => {
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
    }).catch((e) => {
        res.status(500).send();
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});