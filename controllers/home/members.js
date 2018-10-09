const express = require('express');
const router = express.Router();

//members route
router.get('/members.html',  (req, res) => {

    res.render("home/members", req.decoded); 

});

module.exports = router;