const express = require('express');
const router = express.Router();

//index route
router.get('/index.html',  (req, res) => {

    res.render("index"); 

});

module.exports = router;