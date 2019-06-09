var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'NodeJS Reds' });
});

router.get('/', function(req, res, next) {
  res.render('administracion/usuarios/buscar', { title: 'NodeJS Reds' });
});

router.get('/cursos', function(req, res, next) {
  res.render('administracion/cursos/buscar', { title: 'NodeJS Reds' });
});

router.get('/usuarios', function(req, res, next) {
  res.render('administracion/usuarios/buscar', { title: 'NodeJS Reds' });
});

router.post('/usuarionuevo', function(req, res, next) {
  res.render('administracion/usuarios/ingresar', { title: 'NodeJS Reds' });
});

router.get('/cursos2', function(req, res, next) {
  res.render('administracion/cursos/ingresar', { title: 'NodeJS Reds' });
});

module.exports = router;
