//Require Mongoose
const mongoose = require('mongoose');

//Define schema class
const Schema = mongoose.Schema;

//new user schema
const authTokenModel = new Schema({
    userName: {
        type: String,
        required: true
    },
    tokenHash: {
        type: String,
        required: true
    },
    exp: {
        type: Number,
        retuired: true
    }
});

module.exports = mongoose.model('auth_tokens', authTokenModel);