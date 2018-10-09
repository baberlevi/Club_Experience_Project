const express = require('express');
const router = express.Router();

//about route
router.get('/about.html', (req, res) => {

    res.render("home/about", req.decoded);

});

module.exports = router;