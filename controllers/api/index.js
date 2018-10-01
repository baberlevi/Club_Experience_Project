const express = require('express');
const api = express.Router();

//config settings
const config = require('../../config.js');

 //respond with some meta data for root
 api.get('/', (req, res) => {
    res.json({
        "name":config.name,
        "apiVersion": config.apiVersion,
        "Owner": config.owner
    });
});

module.exports = api;