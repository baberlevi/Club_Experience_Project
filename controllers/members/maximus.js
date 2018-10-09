const express = require('express');
const router = express.Router();

//Maxwell DeVos routes
router.get('/index.html',  (req, res) => {

    res.render("./maximus/index", req.decoded); 

});


module.exports = router;