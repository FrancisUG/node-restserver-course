const express = require('express')
const cors = require('cors');


class Server {
  //La propiedades se declaran en los constr d las clases
  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000;

    this.userPath = '/api/users';

    //Middlewares
    this.middlewares()
    //App routes
    this.routes()
  }

  middlewares() {

    //CORS
    this.app.use(cors());

    //Read and Parser body
    this.app.use(express.json());


    //public directory, I need to acces to 'app'
    this.app.use(express.static('public'))
  }

  //Esto dispara el metodo d arriba, wl mwth configura mi ruta y listo
  routes() {
    //We create a meth for routes
    this.app.use(this.userPath, require('../routes/users'));
  }

  listen(){
    this.app.listen(this.port,() =>{
      console.log('Servidor corriendo en puerto', this.port);
    });
}
}


module.exports = Server
