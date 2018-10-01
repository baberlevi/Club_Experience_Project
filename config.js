//File for config information about the site
module.exports =  {
    "name": "Web Development Club",
    "apiVersion": "1.0.0",
    "owner":"Web Development Club Members",
    "dbUrl": process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/webdevclub"
};
