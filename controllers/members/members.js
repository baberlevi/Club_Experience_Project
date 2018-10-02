const express = require('express');
const router = express.Router();

const maximus = require("./maximus.js");

//members route
router.get('/members.html',  (req, res) => {

    res.render("members"); 

});



//loop through the members folder and add the routes for the folder

router.use('/maximus', maximus);//tmp


module.exports = router;