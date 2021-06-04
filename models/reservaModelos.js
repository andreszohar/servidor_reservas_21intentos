// Los hoteles intergalácticos necesitan Construir un API
// REST con NodeJS que permita a cualquier aplicación, crear
// una reserva en sus cruceros llevando la siguiente
// información:
// Nombre Cliente
//  Apellido Cliente
//  Telefono Cliente
//  Fecha inicio Reserva
//  Fecha Final Reserva
//  Número de personas
//  Tipo paquete (Dorado o plata)
// -Consideración: El API REST debe estar en condiciones de

// permitir editar, eliminar o consultar cualquier reserva
// almacenada.

// Finalmente despliegue su api utilizando Heroku y entregue junto
// con su código fuente en la fecha señalada

const {model, Schema}=require('mongoose');

const ReservaTransilvania=Schema({


    NombreCliente:{
        type:String,
        required:true
    },
    ApellidoCliente:{
        type:String,
        required:true
    },
    TelefonoCliente:{
        type:Number,
        required:true
    },
    FechainicioReserva:{
        type:Number,
        required:true
    },
    FechaFinalReserva:{
        type:Number,
        required:true
    },
    Numerodepersonas:{
        type:Number,
        required:true
    },
    Tipopaquete:{
        type:String,
        required:true,
        enum:["dorado","plata"],
    }
});

module.exports=model('Reservas', ReservaTransilvania);