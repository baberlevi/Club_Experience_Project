const express = require('express');
const router = express.Router();

//home views
const members = require("./members.js");
const jobs = require("./jobs.js");
const points = require("./points.js");
const about = require("./about.js");

//index route
router.get('/index.html',  (req, res) => {

    res.render("home/index", req.decoded); 

});

router.get('/', (req,res) => {

    res.render("home/index", req.decoded);
    
});

router.use('/', members);
router.use('/', about);
router.use('/', jobs);
router.use('/', points);

module.exports = router;