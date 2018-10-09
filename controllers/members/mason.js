const express = require('express');
const router = express.Router();

//Mason Timmerman routes
router.get('/index.html', (req, res) => {

    res.render("./mason/index", req.decoded);

});


module.exports = router;