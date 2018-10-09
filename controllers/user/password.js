const express = require('express');
const router = express.Router();

//Change Password/ Forgot Password route
router.get('/password.html',  (req, res) => {

    res.render("user/password", req.decoded); 

});

module.exports = router;