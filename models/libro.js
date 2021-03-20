var { Schema, model } = require("mongoose");

var LibroSchema = Schema({
  isbn: String,
  titulo: String,
  autor: String,
  editorial: String,
  stock: Number,
  imagen: String,
});

module.exports = model("Libro", LibroSchema);
