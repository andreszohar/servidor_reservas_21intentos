const express = require('express');

//se trae cors paqute 
const cors = require('cors')

//se traen las rutas 
const rutas=require('../routes/RutasHoteles.js')

//se trae la concion a BD
const { conectarBD } = require('../database/Conexion.js')

class ReservaModelo{

    constructor(){

        //atributo (variable)  global para configurar el servidor 
        this.app=express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.activarAPI();
    }

    //Metodo (que acciones hace mi servidor)

    puertoApp(){
        this.app.listen(process.env.PORT, function(){
            console.log(`Estoy en otro puerto diferente al del profe  ${process.env.PORT}`);
          });
    }

    activarAPI(){

        this.app.use('/',rutas);

    }
    despertarBaseDatos(){
        conectarBD();
    }
    crearMiddlewares(){
        this.app.use(cors());//acceso
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:true })); //x www
        

    }


}

module.exports=ReservaModelo;