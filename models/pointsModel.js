//Require Mongoose
const mongoose = require('mongoose');

//Define schema class
const Schema = mongoose.Schema;

//new user schema
const pointsModel = new Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('points', pointsModel);