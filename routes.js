const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//middleware
const validation = require("./services/validation.js");

//config settings
const config = require('./config.js');

//include document routes
const ROUTE_index = require("./controllers/index.js");
const ROUTE_jobs = require("./controllers/jobs.js");
const ROUTE_points = require("./controllers/points.js");
const ROUTE_about = require("./controllers/about.js");
const ROUTES_members = require("./controllers/members/members.js");
const ROUTES_user = require("./controllers/user/user.js");

//include api routes
const API_index = require('./controllers/api/index.js');
const API_newJob = require("./controllers/api/newJob.js");
const API_getPoints = require("./controllers/api/getPoints.js");
const APIS_User = require("./controllers/api/user/register.js");

//connect to the database using Mongoose
mongoose.connect(config.dbUrl, {useNewUrlParser: true});

//middleware
router.use(cookieParser());
router.use(express.static('/public'));
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(validation);//authentication

//document routes
router.use('/', ROUTE_index);
router.use('/', ROUTE_jobs);
router.use('/', ROUTE_points);
router.use('/', ROUTE_about);
router.use('/user', ROUTES_user);
router.use('/members', ROUTES_members);

//api routes
router.use('/api', API_index);
router.use('/api', API_newJob);
router.use('/api', API_getPoints);
router.use('/api/user',APIS_User);

//respond with a 404 api request if nothing was found
router.use('/api', (req,res) => {
    
    res.status(404);
    res.json({"error":"Bad request!"});

});

//respond with a 404 request if the document was not found
router.use('/', (req,res) => {

    res.status(404);
    res.render("404");

});

module.exports = router;