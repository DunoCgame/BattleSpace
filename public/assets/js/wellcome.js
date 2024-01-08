let Wellcome={

		Draw:function(W,H){


			new Square(0,0,W,H,0,"Upper-Left","#5B1C9C").Draw();

			//new Images(0,0,W,H,'../image.png').Draw();
			
			new Text('Battle Space','100px','Calibri','White',W/2-250,H/2).Draw();
			new Text('Press Enter','40px','Calibri','White',W/2-80,H/2+150).Draw();


		},
		Action:function(){

			if(Keyboard["ArrowUp"]==true){



			}

		}
}