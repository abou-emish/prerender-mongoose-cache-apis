//dependencies
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prerender Mongodb cach Restful APIs' });
});

module.exports = router;
