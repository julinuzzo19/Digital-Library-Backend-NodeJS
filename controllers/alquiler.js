var Alquiler = require("../models/alquiler");

var alquilerController = {
  test: (req, res) => {
    return res.status(200).send({
      test: "testeando alquilercontroller",
    });
  },

  getAlquileres: (req, res) => {
    var query = Alquiler.find({});

    query.exec((err, alquiler) => {
      return res.status(200).send({
        message: "ok",
        alquiler,
      });
    });
  },

  postAlquiler: (req,res)=>{

    // Recoger parametros por post
    var params = req.body;

    //Crear objeto a guardar
    var alquiler= new Alquiler();

    //Asignar valores
    alquiler.fechaAlquiler= params.fechaAlquiler;
    alquiler.fechaReserva= params.fechaReserva;
    alquiler.clienteId= params.clienteId;
    alquiler.isbn=params.isbn;

    //Guardar alquiler
    alquiler.save((err,alquiler))



  }






};

module.exports = alquilerController;
