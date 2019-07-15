const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true
});