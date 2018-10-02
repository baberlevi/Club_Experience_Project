const express = require('express');
const api = express.Router();
const Points = require("../../models/pointsModel.js");

 //respond with some meta data for root
 api.post('/getPoints', (req, res) => {
    
    let points = new Points({
        name: req.body.name, 
        points: req.body.points
    })

    points.save((err) => {
        if(err) throw err;
        console.log("points Added");
    });

    res.redirect("/getPoints.html");

});

module.exports = api;