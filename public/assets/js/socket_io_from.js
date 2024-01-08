var socket = io();

    socket.on('connect', function() {
      
      console.log('Conectado al servidor socket');
      
      socket.emit('get_id', 'Hola servidor');


    });
/*************************************************/
/******************funciones de comunicacion*********/
    socket.on('your_id', function (id) {
      

      console.log('you id',id);

      id_player=id;


    });

    socket.on('new_player', function (id) {
      

      console.log('you id',id);


    });

    socket.on('disconnect', function() {

      console.log('Desconectado del servidor');


    });


    function add_new_player(obj){
    	console.log(obj)

    	  socket.emit('new_player_register', obj);
    }