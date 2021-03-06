// dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Page document Schema
var pageSchema = new mongoose.Schema({
    url: String,
    content: String,
    creationDate: Date
});

module.exports = restful.model('Page', pageSchema);