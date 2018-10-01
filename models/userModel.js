//Require Mongoose
const mongoose = require('mongoose');

//Define schema class
const Schema = mongoose.Schema;

//new user schema
const userModel = new Schema({
    firstname: {
        type: String,
        min: 2,
        max: 30,
        required: true
    },
    lastname: {
        type: String,
        min: 2,
        max: 30,
        required: true
    },
    email: {
        type: String,
        min: 5,
        max: 20,
        required: true
    },
    points: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('users', userModel);