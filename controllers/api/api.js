const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//config settings object
const config = require('../../config.js');

//include index api route
const index = require('./index.js');
const newJob = require("./newJob.js");
const getPoints = require("./getPoints.js");

//connect to the database using Mongoose
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true
});

//other api routes
router.use('/', index);
router.use('/', newJob);
router.use('/', getPoints);

//respond with a 404 api request if nothing was found
router.use((req,res) => {
    res.status(404);
    res.json({"error":"request not found!"});
});

module.exports = router;




    
