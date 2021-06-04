//importo el modelo del servidor
const ReservaModelo=require('./models/ServidorModelo')

//se trae el paquete de enviar
require('dotenv').config()

//Instancio (saco una fotocopia de mi servidorModelo)
let reservo= new ReservaModelo();

//levanto el servidor 
reservo.puertoApp();