var Libro = require("../models/libro");

var libroController = {
  getLibros: (req, res) => {
    var query = Libro.find({});

    query.exec((err, libro) => {
      return res.status(200).send({
        message: "ok",
        libro,
      });
    });
  },

  getLibroByIsbn: (req, res) => {
    var isbnlibro = req.params.isbn;

    Libro.find({ isbn: isbnlibro }, (err, libro) => {
      return res.status(200).send({
        status: "Ok",
        libro,
      });
    });
  },
};

module.exports = libroController;
