const express = require('express');
const router = express.Router();

//include page routes source
const index = require("./index.js");
const jobs = require("./jobs.js");
const points = require("./points.js");
const about = require("./about.js");
const members = require("./members/members.js");

//include api routes source
const api = require("./api/api.js");

//routes for pages
router.use('/', index);
router.use('/', jobs);
router.use('/', points);
router.use('/', about);
router.use('/', members);

//api routes
router.use('/api', api);

module.exports = router;