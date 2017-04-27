// dependencies
const express = require('express');
const router = express.Router();

// authentication
const Passport = require('../auth/passport/basic');

// Models
const Page = require('../models/page');

// define which verps will be registered when you call register(router, '/pages');
Page.methods(['get', 'post', 'put', 'delete']);

//  api landing page: api/ 
router.get('/', (req, res) => {
    res.render('api', { title: 'Prerender Mongodb cach Restful APIs' });
});

//  use Passport.authenticate middleware function for all next registered routes
router.all('*', Passport.authenticate('basic', { session: false }));

// Register routes for all above http methods with crud operations
Page.register(router, '/pages');

module.exports = router;