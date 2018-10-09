const express = require('express');
const router = express.Router();

//logout route
router.get('/logout.html',  (req, res) => {

    res.render("user/logout", req.decoded); 

});



module.exports = router;