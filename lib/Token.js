const jwt = require("jsonwebtoken");

class Token{

    /**
     * Method generates a token based on a given payload
     * @param {*} payload 
     */
    static tokenGen(payload) {
        let result;

        try {
            result = jwt.sign(payload, process.env.secretKey || "SuperSecretKey");
        }catch(err){
            result = false;
        }
        
        return result;
    }

    /**
     * Method checks the validity of a token
     * @param {*} token 
     */
    static tokenCheck(token) {
        let result;

        try{
            result = jwt.verify(token, process.env.secretKey || "SuperSecretKey");
        }catch(err){
            result = {
                "auth": false
            };
        }
        return result;
    }

}

module.exports = Token;