const express = require('express');
const router = express.Router();
const jobModel = require("../models/jobModel.js");

//job list
router.get('/jobs.html', (req, res) => {

    if(req.decoded.auth){
        jobModel.find({status: 1}, (err, data) => {
            if (err) throw err;
            
            res.render("jobs", {jobs: data});
    
        });
    }else{
        res.redirect("/user/login.html");
    }
  
    

});

//add jobs
router.get('/newJob.html', (req, res) => {
    
    if(req.decoded.auth){
            
            res.render("newJob");
    
    }else{
        res.redirect("/user/login.html");
    }

});

module.exports = router;