var express = require('express');
var LibroController = require('../controllers/libro');


const router= express.Router();

//Rutas

router.get('/test', LibroController.test);

module.exports= router;