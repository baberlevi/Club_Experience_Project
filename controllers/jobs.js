const express = require('express');
const router = express.Router();
const jobModel = require("../models/jobModel.js");

//job list
router.get('/jobs.html', (req, res) => {
  
    jobModel.find({status: 1}, (err, data) => {
        if (err) throw err;
        
        res.render("jobs", {jobs: data});

    });

});

//add jobs
router.get('/newJob.html', (req, res) => {
    res.render("newJob");
});

module.exports = router;