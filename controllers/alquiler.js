const moment = require("moment");
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

  getAlquilerByClienteId: (req, res) => {
    var cliente_Id = req.params.id;

    if (!cliente_Id || cliente_Id == null) {
      return res.status(404).send({
        status: "error",
        message: "No existe el articulo !!!",
      });
    }

    Alquiler.find({ clienteId: cliente_Id }, (err, alquiler) => {
      if (err || !alquiler) {
        return res.status(404).send({
          status: "error",
          message: "No se encuentra el articulo!",
        });
      }

      //Si se encuentra
      return res.status(200).send({
        status: "sucess",
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

    alquiler.estadoAlquiler = 1;
    alquiler.fechaDevolucion = moment(alquiler.fechaAlquiler, "DD/MM/YYYY").add(7,"days").format('DD/MM/YYYY');


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
    Alquiler.findOneAndDelete({ _id: alquilerId }, (err, alquilerRemoved) => {
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

  putAlquiler: (req, res) => {
    //Recoger el id del alquiler por la url
    var alquilerId = req.params.id;

    //Recoger los datos que llegan por put
    var params = req.body;

    //Encontrar y actualizar
    Alquiler.findByIdAndUpdate(
      { _id: alquilerId },
      params,
      { new: true },
      (err, alquilerUpdated) => {
        if (err) {
          return res.status(500).send({
            status: "error",
            message: "Error al actualizar",
          });
        }

        if (!alquilerUpdated) {
          return res.status(404).send({
            status: "error",
            message: "No existe el articulo !!!",
          });
        }

        return res.status(200).send({
          status: "success",
          article: alquilerUpdated,
        });
      }
    );
  },
}; //end controller;

module.exports = alquilerController;
