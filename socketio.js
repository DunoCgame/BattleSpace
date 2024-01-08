let Players=[]

module.exports = function SocketIO(io){

console.log("socket.io ")

		io.on('connection', (socket) => {

		  			console.log('Un usuario se ha conectado');

					socket.on('get_id', (data) => {

				    console.log('your id', socket.id);
				    socket.emit('your_id', socket.id);
				  
			});


	  socket.on('new_player_register', (data) => {
	  		Players.push(data)

	  		console.log(Players)

	  		socket.emit("new_player",Players)
	    
	  });
	  /************/
	 /// movimiento

	  socket.on('disconnect', () => {

	    console.log('Un usuario se ha desconectado');


	  });
});

}