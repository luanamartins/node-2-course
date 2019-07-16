const express = require('express');
const User = require('./../models/User');

const router = new express.Router();

router.post('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/users/:id', (req, res) => {
    const _id = req.params.id // Access the id provided
    console.log(User);
    User.findById(_id).then((user) => {
            if (!user) {
                return res.status(404).send();
            }
            res.send(user);
    }).catch((e) => {
        res.status(500).send();
    });
});

router.patch('/users/:id', async (req, res) => {
    // Route handler code here
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/users/:id', async (req, res) => {
    // Route handler
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
