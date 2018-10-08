const Token = require("../lib/Token.js");

//validate the request on protexted routes
let validation = (req, res, next) => {

    let auth;

    //check if either a cookie or http header is present
    if (req.cookies["token"]) {

        let token;
        
        token = req.cookies["token"];
    
        //test if the token is valid
        auth = Token.tokenCheck(token);

        //check for matching ip
        if (auth.ip !== req.ip) {

            auth = {
                "auth": false
            };
        }

    } else {
        auth = {
            "auth": false
        };
    }

    //continue to the routes with the decoded auth
    req.decoded = auth;
    next();
};

module.exports = validation;