const express = require('express');
const router = express.Router();

//add your pages route here
const maximus = require("./maximus.js");
const mason = require("./mason.js");

//members route
router.get('/members.html',  (req, res) => {

    res.render("members/members"); 

});

//use the route here
router.use('/maximus', maximus);//tmp
router.use('/mason', mason);


module.exports = router;