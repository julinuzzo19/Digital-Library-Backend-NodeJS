var express = require('express');
var AlquilerController = require('../controllers/alquiler');


const router= express.Router();

//Rutas
router.get('/', AlquilerController.getAlquileres);
router.post('/', AlquilerController.postAlquiler);
router.delete('/:id', AlquilerController.deleteAlquiler);
router.get('/cliente/:id',AlquilerController.getAlquilerByClienteId);
router.put('/:id', AlquilerController.putAlquiler);


module.exports= router;