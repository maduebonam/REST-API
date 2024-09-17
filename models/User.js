const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: [String] // This defines an array of strings
    }
});

module.exports = mongoose.model('User', UserSchema);