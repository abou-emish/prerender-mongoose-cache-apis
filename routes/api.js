//dependencies
const express = require('express');
const router = express.Router();

//Models
const Page = require('../models/page');

Page.methods(['get', 'post', 'put', 'delete']);

//Register routes for all above http methods
Page.register(router, '/pages');

//Get Pages 
router.get('/', (req, res) => {
    res.render('api', { title: 'Prerender Mongodb cach Restful APIs' });
});

module.exports = router;