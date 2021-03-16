var express = require('express');
var AlquilerController = require('../controllers/alquiler');


const router= express.Router();

//Rutas
router.get('/', AlquilerController.getAlquileres);
router.post('/', AlquilerController.postAlquiler);
router.delete('/:id', AlquilerController.deleteAlquiler);
router.get('/:id',AlquilerController.getAlquilerById);

module.exports= router;