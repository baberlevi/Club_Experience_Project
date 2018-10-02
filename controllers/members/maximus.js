const express = require('express');
const router = express.Router();

//Maxwell DeVos routes
router.get('/index.html',  (req, res) => {

    res.render("./members/maximus/index"); 

});


module.exports = router;