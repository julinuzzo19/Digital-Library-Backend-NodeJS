const alquiler = require("../models/alquiler");
var Alquiler = require("../models/alquiler");

var alquilerController = {
  getAlquileres: (req, res) => {
    var query = Alquiler.find({});

    query.exec((err, alquiler) => {
      return res.status(200).send({
        message: "ok",
        alquiler,
      });
    });
  },

  postAlquiler: (req, res) => {
    // Recoger parametros por post
    var params = req.body;

    //Crear objeto a guardar
    var alquiler = new Alquiler();

    //Asignar valores
    alquiler.fechaAlquiler = params.fechaAlquiler;
    alquiler.fechaReserva = params.fechaReserva;
    alquiler.clienteId = params.clienteId;
    alquiler.isbn = params.isbn;

    alquiler.clienteId = 1;
    alquiler.estadoAlquiler = 1;
    alquiler.fechadevolucion = "16/3/2021";

    //Guardar alquiler
    alquiler.save((err, alquiler) => {
      if (err || !alquiler) {
        return res.status(404).send({
          status: err,
        });
      }
      return res.status(200).send({
        data: alquiler,
        status: "ok",
      });
    });
  },

  deleteAlquiler: (req, res) => {
    //Recoger id por url
    var alquilerId = req.params.id;

   //_id obligatorio
    Alquiler.findOneAndDelete({_id: alquilerId }, (err, alquilerRemoved) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error al borrar !!!",
        });
      }
      if (true) {
        return res.status(200).send({
          status: "success",
          alquiler: alquilerRemoved,
        });
      }
    });
  },

  putAlquiler: (req, res) => {},
  getAlquilerbyClienteId: (req, res) => {},
}; //end controller;

module.exports = alquilerController;
