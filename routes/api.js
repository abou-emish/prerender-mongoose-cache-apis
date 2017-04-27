//dependencies
const express = require('express');
const router = express.Router();

//Models
const Page = require('../models/page');

Page.methods(['get', 'post', 'put', 'delete']);

//Register routes for all above http methods
Page.register(router, '/pages');

module.exports = router;