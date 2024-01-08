const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path')
const io = require('socket.io')(http);


const SocketIO = require('./socketio');


	var port = process.env.PORT || 3000;

		
		app.use(express.static(path.join(__dirname, "public")));


		app.get('/', function (req, res) {

		    res.send('hello world');

		
		});

		// Manejo de errores de ruta
		app.use(function(req, res, next) {

		  res.status(404).send('Lo siento, no puedo encontrar eso.');

		});

		// Manejo de errores del servidor
		app.use(function(err, req, res, next) {

		//  console.error(err.stack);
		  res.status(500).send('Algo anda mal!');

		});

SocketIO(io)




http.listen(port, () => {
  console.log('Servidor en ejecución en http://localhost:'+port);
});