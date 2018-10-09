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
const ROUTES_home = require("./controllers/home/index.js");
const ROUTES_user = require("./controllers/user/user.js");
const ROUTES_maximus = require("./controllers/members/maximus.js");
const ROUTES_mason = require("./controllers/members/mason.js");

//include api routes
const API_index = require('./api/home/index.js');
const APIS_job = require("./api/jobs/newJob.js");
const APIS_User = require("./api/user/register.js");

//connect to the database using Mongoose
mongoose.connect(config.dbUrl, {useNewUrlParser: true});

//middleware
router.use(cookieParser());
router.use(express.static('/public'));
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(validation);

//document routes
router.use('/', ROUTES_home);
router.use('/user', ROUTES_user);
router.use('/maximus', ROUTES_maximus);
router.use('/mason', ROUTES_mason);

//api routes
router.use('/api', API_index);
router.use('/api/job', APIS_job);
router.use('/api/user',APIS_User);

//respond with a 404 api request if nothing was found
router.use('/api', (req,res) => {
    
    res.status(404);
    res.json({"error":"Bad request!"});

});

//respond with a 404 request if the document was not found
router.use('/', (req,res) => {

    res.status(404);
    res.render("status/404", req.decoded);

});

module.exports = router;