var express = require('express');
var ClienteController = require('../controllers/cliente');


const router= express.Router();

//Rutas
router.get('/test', ClienteController.test);

module.exports= router;