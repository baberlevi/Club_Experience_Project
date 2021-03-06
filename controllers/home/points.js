const express = require('express');
const router = express.Router();
const Points = require("../../models/pointsModel.js");

//points list
router.get('/points.html', (req, res) => {
    
    if(req.decoded.auth){
        Points.find((err,data) => {
            if (err) throw err;

            req.decoded.points = data;
            
            res.render("home/points", req.decoded);
        });
    }else{
        res.redirect("/user/login.html");
    }
    

});

//add points   <-- should be removed technically later
router.get('/getPoints.html', (req,res) => {

    if(req.decoded.auth){
        res.render("home/getPoints");
    }else{
        res.redirect("/user/login.html");
    }
    

});

module.exports = router;