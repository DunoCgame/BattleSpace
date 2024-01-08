
Screen.Init();
KeyboardEvents("string","show");





let Player = new ship(50, 50, 10, 10);



function LoopGame(){
  
  Screen.Clear();



  switch (scene) {

    case "welcome":

		Wellcome.Draw(Screen.Canvas.width,Screen.Canvas.height);
		new Square(0,0,10,10,0,"Upper-Left","#619A38")

		if(Keyboard["Enter"]==true && scene=="welcome" && Tecla_presionada==0){


		console.log("select")

		scene="select_ship";

		Tecla_presionada=1;

		}

    break;
    case "select_ship":

      Select_Ship.background(Screen.Canvas.width,Screen.Canvas.height);
      Select_Ship.type_ship();
  
	  if(Keyboard["Enter"]==true && scene=="select_ship" && Tecla_presionada==0){

	      scene="Game";


	      console.log("game")

	      Tecla_presionada=1;

	  }

    break;  
    case "Game":

    Word_game.Draw(Screen.Canvas.width,Screen.Canvas.height)
     

      // Dibujar el personaje en el lienzo
    Player.Draw();

      // Mover el personaje
    Player.Move();
      
      /*bulllet*/
    /*  Player.bullet()
      Player.Drawbullet()
      Player.Shootbullet()*/
      /********************************/

      break;

      default:
      // statements_def
      break;
  }


  if(Keyboard["Enter"]==false && Tecla_presionada==1){

      console.log("game")

      Tecla_presionada=0;

  }


  Game_loop.Start(LoopGame);


}


window.onload = LoopGame();