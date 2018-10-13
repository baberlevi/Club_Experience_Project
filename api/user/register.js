const express = require('express');
const api = express.Router();
const Hash = require("../../lib/Hash.js");

//models
const UserModel = require("../../models/account/userModel.js");

//user api source
const login = require("./login.js");
const logout = require("./logout.js");

//register api
api.post('/register',  (req, res) => {

    //check if passwords match
    if(req.body.password == req.body.passwordCheck && req.body.password.length > 8 && req.body.password.length < 55){
        req.body.password = Hash.hashString(req.body.password);
    }else {
        req.body.password = null;
    }

    UserModel.find({email: req.body.email},(err, result) => {//check for duplicate user
        
        if(result.length > 0){
            req.body.email = null;
        }

        let user = new UserModel(req.body);

        // console.log(res.err);
        //save new user here
        user.save((err) => {
            if (err) {
                res.redirect("/user/register.html");
            }else{
                res.redirect("/user/login.html");
            }
        });
        
    });
});


api.use('/', login);
api.use('/', logout);

module.exports = api;