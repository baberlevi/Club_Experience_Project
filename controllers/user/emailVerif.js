const express = require('express');
const router = express.Router();

//email verification route
router.get('/emailVerif.html',  (req, res) => {

    res.render("user/emailVerif"); 

});

module.exports = router;