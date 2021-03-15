var express = require('express');
var AlquilerController = require('../controllers/alquiler');


const router= express.Router();

//Rutas

router.get('/test', AlquilerController.test);
router.get('/', AlquilerController.getAlquileres);
router.post('/', AlquilerController.postAlquiler);

module.exports= router;