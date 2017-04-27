//dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

//Schema
var client = new mongoose.Schema({
    name: String,
    token: String,
    creationDate: Date,
    modificationDate: Date
});

module.exports = restful.model('Page',pageSchema);