var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'NodeJS Reds' });
});

router.get('/', function(req, res, next) {
  res.render('buscar', { title: 'NodeJS Reds' });
});

module.exports = router;
