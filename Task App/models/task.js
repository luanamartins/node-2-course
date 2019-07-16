const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
   }, 
   { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
