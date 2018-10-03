const express = require('express');
const router = express.Router();

//add your pages route here
const maximus = require("./members/maximus.js");

//members route
router.get('/members.html',  (req, res) => {

    res.render("members"); 

});

//use the route here
router.use('/maximus', maximus);//tmp


module.exports = router;