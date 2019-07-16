const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});