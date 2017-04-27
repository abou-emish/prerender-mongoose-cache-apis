//dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

//Schema
var pageSchema = new mongoose.Schema({
    url: String,
    content: String,
    creationDate: Date,
    modificationDate: Date
});

module.exports = restful.model('Page',pageSchema);