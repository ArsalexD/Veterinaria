db = db.getSiblingDB("veterinaria");
db.empleado.insertOne(
    {
        "idemple": "1",
        "nombre": "Antonio",
        "apellido1": "Gonzalez",
        "apellido2": "Mendoza",
        "direccion": "Av Guayabos",
        "telefono": "+52331234323",
        "correo": "correomendoza@gmail.com",
        "horario": [
            {
                "horaini": "7:00",
                "horafin": "14:00",
                "dias": "Lunes, Jueves, Viernes"
            }
        ]
    }
);
db.cliente.insertOne(
    {
        "idcliente": "1",
        "nombre": "TEST",
        "apellido1": "TEST1",
        "apellido2": "TEST2",
        "direccion": "direccion test",
        "telefono": "+523312345678",
        "correo": "correotest@gmail.com",
        "mascota": [
            {
                "idmascota": "1",
                "nombre": "firulais",
                "raza": "chihuahua",
                "tamaño": "pequeña",
                "peso": 3
            }
        ],
        "cita": [
            {
                "idcita": "1",
                "numerocita": 3,
                "fecha": {
                    "$date": "2020-06-16T05:00:00.000Z"
                },
                "hora": "15:00",
                "descripcion": "Desparacitacion",
                "servicio": [{
                    "nombreserv": "Desparacitacin",
                    "costo": 199,
                    "descuento": [{ "monto": .30 }],
                    "total":189
                }]
            }
        ],
        "tipocliente": [
            {
                "registrado": true
            }
        ]
    }
);
db.usuario.insertOne({
    "idusuario": "1",
    "correo": "testusuario@gmail.com",
    "contraseña": "testusuario",
    "tipo": "Empleado/Medico/Administrador/cliente"
});


db.jaula.insertOne({
    "numerojaula": "1",
    "activa": false,
    "idmascota": "12121",
    "hora":{$date:{"horaini":""}}
});