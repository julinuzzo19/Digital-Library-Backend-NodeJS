var express = require('express');
var LibroController = require('../controllers/libro');


const router= express.Router();

//Rutas

router.get('/', LibroController.getLibros);
router.get('/:isbn',LibroController.getLibroByIsbn);



module.exports= router;