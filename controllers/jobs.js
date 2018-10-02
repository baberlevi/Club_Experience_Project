const express = require('express');
const router = express.Router();
const jobModel = require("../models/jobModel.js");

//job route
router.get('/jobs.html', (req, res) => {
  
    jobModel.find({status: 1}, (err, data) => {
        if (err) throw err;
        
        res.render("jobs", {jobs: data});

    });

});

router.get('/newJob.html', (req, res) => {
    res.render("newJob");
});

module.exports = router;