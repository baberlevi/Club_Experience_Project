const express = require('express');
const api = express.Router();
const Job = require("../../models/jobModel.js");

 //respond with some meta data for root
 api.post('/newJob', (req, res) => {
    
    let job = new Job({
        name: req.body.name, 
        description: req.body.description,
        points: req.body.points
    })

    job.save((err) => {
        if(err) throw err;
        console.log("Job Added");
    });

    res.redirect("/newJob.html");

});

module.exports = api;