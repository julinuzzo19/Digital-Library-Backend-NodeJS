var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlquilerSchema = Schema({
    id:Number,
    fechaAlquiler:Date,
    fechaReserva:Date,
    fechaDevolucion:Date,
    clienteId:Number,
    estadoAlquiler:Number,
    isbn:String
});

module.exports = mongoose.model('Alquiler', AlquilerSchema);