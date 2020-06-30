const mongoose = require('mongoose');
const empleadoSchema= new mongoose.Schema({
    
    "idemple":  {
        type:Number,
        required: true,
        unique: true,
    
    },
    "nombre": {
        type :String,
        required:true,

    },
    "apellido1": String,
    "apellido2": String,
    "direccion": String,
    "telefono": Number,

    "correo": {
        type: String,
        required: true,
        unique:true,

    },
    "contrasena":{
        type: String,
        required: true
    },
    "horario": Array

    

})

mongoose.model('empleado',empleadoSchema);
