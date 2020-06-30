const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const UsuarioSchema= new mongoose.Schema({

"idusuario": {
    type : Number,
    required: true,
    unique: true,
},
"correo":{
    type :String,
    required:true,

},
"contrasena": {
    type: String,
    required: true
},
"tipo": {

    type :String,
    required:true,
}
})

mongoose.model('usuario',UsuarioSchema);
