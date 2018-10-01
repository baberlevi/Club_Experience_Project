//Require Mongoose
const mongoose = require('mongoose');

//Define schema class
const Schema = mongoose.Schema;

//new user schema
const jobsModel = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    },
    points: {
        type: Number,
        default: 1
    },
    claimedBy: {
        type: String,
        default: "  "
    }
});

module.exports = mongoose.model('jobs', jobsModel);