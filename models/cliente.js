var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    id:Number,
    nombre:String,
    apellido:String,
    dni:String,
    email:String
});

module.exports = mongoose.model('Cliente', ClienteSchema);