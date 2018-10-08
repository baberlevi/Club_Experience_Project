const express = require('express');
const api = express.Router();
const Hash = require("../../../lib/Hash.js");

//models
const UserModel = require("../../../models/userModel.js");

//members route
api.post('/register',  (req, res) => {

    //check if passwords match
    if(req.body.password == req.body.passwordCheck){
        req.body.password = Hash.hashString(req.body.password);
    }else {
        req.body.password = null;
    }
    //check for duplicate emails
    //user.find()

    let user = new UserModel(req.body);
    
    user.save((err) => {
        if (err) {
            res.json({
                "userCreated": false,
                "err":err
            });
        }else{
            res.json({"userCreated": true});
        }
    });

});

module.exports = api;