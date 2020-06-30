const mongoose = require('mongoose');
const ClienteSchema= new mongoose.Schema({
    //hola modifique el archivo cliente.

    /*
    
        "idcliente": Number,
        "nombre": String,
        "apellido1": String,
        "apellido2": String,
        "direccion": String,
        "telefono": Number,
        "correo": String,
        "mascota": [
            {
                "idmascota": Number,
                "nombre": String,
                "raza": String,
                "tamaño": String,
                "peso": Number
            }
        ],
        "cita": [
            {
                "idcita": Number,
                "numerocita": Number,
                "fecha": {
                    "$date": Date,
                },
                "hora": String,
                "descripcion": String,
                "servicio": [{
                    "nombreserv": String,
                    "costo": Number,
                    "descuento": [{ "monto": Number }],
                    "total": Number
                }]
            }
        ],
        "tipocliente": [
            {
                "registrado": true
            }
        ]
    */
    })

mongoose.model('cliente',ClienteSchema);
