/*
Use local mongoDB during development as application settings "MONGODB_URL" not available yet
change the mongoDB to a remote url if you don't have mongoDB installed localy 
*/
module.exports = {
    url: process.env.MONGODB_URL || 'mongodb://localhost/prerendercache',
    options: {}
}