const jwt = require("jsonwebtoken");
const Hash = require("./Hash.js");
const TokenModel = require("../models/account/tokenModel.js");

/**
 * Token class
 * 
 */
class Token{

    /**
     * Method generates a token based on a given payload
     * @param {*} payload 
     */
    static tokenGen(payload) {
        
        TokenModel.find({userName: payload.userEmail}, (err, data) => {

            if(err || data.length > 0){

                TokenModel.findOneAndDelete({userName: payload.userEmail}, (err,data) => {
                   if(err){
                       console.log("token not removed");
                   } 
                   console.log(`Token for ${data.userName} already exist. Removing from existing records.`);
                   return false;
                });

            }else{

                let newToken = new TokenModel({
                    userName: payload.userEmail,
                    tokenHash: Hash.hashString(result),
                    exp: (Math.floor(Date.now() / 1000) + 60) * 24 
                });
    
                newToken.save((err) => {
                    if (err){
                        console.log("Save Failed");
                        return false;
                    }else{
                        console.log("Saving New record");
                        return jwt.sign(payload, process.env.secretKey || "SuperSecretKey");
                    }
                });
            }
        });
    }

    /**
     * Method checks the validity of a token
     * @param {*} token 
     */
    static tokenCheck(token) {
        let result;

        try{
            result = jwt.verify(token, process.env.secretKey || "SuperSecretKey");

            console.log(result);

        }catch(err){
            result = {
                "auth": false
            };
        }
        return result;
    }

}

module.exports = Token;