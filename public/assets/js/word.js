/****word***/

let Word =[]

/****word***/


let GameOver = {

	Draw:function(W,H){
		new Square(0,0,W,H,0,"Upper-Left"," rgba(15, 15, 15, 0.5)").Draw();


		new Text('Game Over','100px','Calibri','White',W/2-250,H/2).Draw();


		new Text('Back press Esc','40px','Calibri','White',W/2-50,H/2+150).Draw();

	
	},
	Back:function(){

		if(Keyboard["ArrowUp"]==true){



		}
	}

}

let Victory ={

	Draw:function(W,H){
		new Square(0,0,W,H,0,"Upper-Left"," rgba(15, 15, 15, 0.5)").Draw();


		new Text('Victory','100px','Calibri','White',W/2-200,H/2).Draw();


		new Text('press Enter','40px','Calibri','White',W/2-50,H/2+150).Draw();

	
	},
	Back:function(){

		if(Keyboard["Enter"]==true){

			return ""

		}
	}
}


let Word_game = {

	Draw:function(W,H){

			new Square(0,0,W,H,0,"Upper-Left","#464646").Draw();
	}

}