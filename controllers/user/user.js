const express = require('express');
const router = express.Router();

const register = require("./register.js");
const password = require("./password.js");
const emailVerif = require("./emailVerif.js");
const login = require("./login.js");

//dashboard route
router.get('/user.html',  (req, res) => {

    res.render("user/user"); 

});

router.use('/', register);
router.use('/', login);
router.use('/', emailVerif);
router.use('/', password);

module.exports = router;