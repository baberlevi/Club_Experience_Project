const express = require('express');
const api = express.Router();

//logout route
api.get('/logout',  (req, res) => {

    res.clearCookie("token");
    res.redirect("/index.html");

});



module.exports = api;