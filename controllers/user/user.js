const express = require('express');
const router = express.Router();

const register = require("./register.js");
const passwordReset = require("./password.js");
const emailVerification = require("./emailVerif.js");
const login = require("./login.js");
const logout = require("./logout.js");

//dashboard route
router.get('/user.html',  (req, res) => {

    if(req.decoded.auth){
        res.render("user/user", req.decoded); 
    }else{
        res.redirect("/user/login.html");
    }

});

router.use('/', register);
router.use('/', login);
router.use('/', logout);
router.use('/', emailVerification);
router.use('/', passwordReset);

module.exports = router;