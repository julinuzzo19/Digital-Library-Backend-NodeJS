var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlquilerSchema = Schema({
    id:Number,
    fechaAlquiler:Date,
    fechaReserva:Date,
    fechaDevolucion:Date
});

module.exports = mongoose.model('Alquiler', AlquilerSchema);