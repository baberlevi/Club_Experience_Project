//Require Mongoose
const mongoose = require('mongoose');

//Define schema class
const Schema = mongoose.Schema;

//new user schema
const userModel = new Schema({
    firstName: {
        type: String,
        min: 2,
        max: 30,
        required: true
    },
    lastName: {
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
    password: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String
    }
});

module.exports = mongoose.model('users', userModel);