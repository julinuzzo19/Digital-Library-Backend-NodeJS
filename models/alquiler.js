var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlquilerSchema = Schema({
    id:mongoose.Schema.Types.ObjectId,
    fechaAlquiler:{type:String ,default:null},
    fechaReserva:{type:String ,default:null},
    fechaDevolucion:String,
    clienteId:Number,
    estadoAlquiler:Number,
    isbn:String
});

module.exports = mongoose.model('Alquiler', AlquilerSchema);