var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Prerender Mongodb cach Restful APIs' });
});

module.exports = router;
