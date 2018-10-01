const express = require('express');
const router = express.Router();
const jobModel = require("../models/jobModel.js");

//job route
router.get('/jobs.html', (req, res) => {

    let jobs;

    if(jobModel.count() > 0) {
         jobs = jobModel.find();
    }else{
        jobs = [{
            name: "Default Job",
            description: "This is a default job because the db is empty",
            status: 1,
            points: 10,
            claimedBy: "Default Jimmy"
        }];
    }

    res.render("jobs", {jobs: jobs});

});

module.exports = router;