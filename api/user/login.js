const express = require('express');
const login = express.Router();
const loginModel = require("../../models/userModel.js");
const Token = require("../../lib/Token");
const Hash = require("../../lib/Hash.js");

//for a login
login.post('/login', (req, res) => {

    let subEmail = req.body.email;
    let subPassword = req.body.password;

    loginModel.findOne({email: subEmail}, "password", (err, result) => {

        if(result){
            
            if (Hash.compareHash(subPassword, result.password)) {

                let payload = {
                    auth: true,
                    ip: req.ip,
                    key: "some hashed key in the future",
                    userEmail: subEmail,
                    exp: (Math.floor(Date.now() / 1000) + 60) * 24
                };

                res.cookie("token", Token.tokenGen(payload), {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                });

                res.redirect("/user/user.html");

            }else{
                res.redirect("/user/login.html");
            }
        } else{
          res.redirect("/user/login.html");  
        }
    });
});

module.exports = login;
