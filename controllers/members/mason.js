const express = require('express');
const router = express.Router();

//Mason Timmerman routes
router.get('/index.html', (req, res) => {

    res.render("./members/mason/index");

});


module.exports = router;