const express = require('express');
const router = express.Router();

const register = require("./register.js");
const passwordReset = require("./password.js");
const emailVerification = require("./emailVerif.js");
const login = require("./login.js");

//dashboard route
router.get('/user.html',  (req, res) => {

    res.render("user/user"); 

});

router.use('/', register);
router.use('/', login);
router.use('/', emailVerification);
router.use('/', passwordReset);

module.exports = router;