const express = require('express');
const router = express.Router();
const pointsModel = require("../models/pointsModel.js");
//points route
router.get('/points.html', (req, res) => {
    
    let points;

    if (pointsModel.count() > 0) {
        points = pointsModel.find();
    } else {
        points = [{
            name: "Default Jimmy",
            points: 10,
        }];
    }

    res.render("points", { points: points });

});

module.exports = router;