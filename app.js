require('dotenv').config();


//Remember import 'Server'
const Server = require('./models/server');


//Our webserver instance 
const server = new Server();


//Lanzamos el meth listen
server.listen();