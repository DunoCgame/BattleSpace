/*player*/
let  bullets= [];


class ship{
	constructor(X,Y,W,H) {
		this.X=Screen.Canvas.width/2,
		this.Y=Screen.Canvas.height/2,
		this.W=W;
		this.H=H;
		this.Angle=90;
		this.Radians=0;
		this.life=10;
		this.Url="";
		this.Image="";
		this.Speed=10;

	}
	Draw(){

		new Square(this.X,this.Y,this.W,this.H,0,"Meddle-Center","green").Draw();
		
	}
	Move(Speed){
	
			let Radians = this.Angle*Math.PI / 180;


			if(Keyboard["ArrowUp"]==true){

				this.X -= Math.cos(Radians) * this.Speed;
				this.Y -= Math.sin(Radians) * this.Speed; 
			}

				if(Keyboard["ArrowDown"]==true){

				this.Y+=this.Speed;

			}
		
			if(Keyboard["ArrowLeft"]==true){

				
				this.Angle-=this.Speed; 

			}
			if(Keyboard["ArrowRight"]==true){

				this.Angle+=this.Speed; 

			}

			



	}
	bullet(){	
		if(Keyboard["a"]==true){

			
			bullets.push({
				x:this.X,
		        y:this.Y,	
		        width:10,
		        height:10,
		        angle:this.Angle
			})

		}
	}
	Drawbullet(){

		new Debug(bullets.length,10,20).Draw();

	for(var i in bullets){

        var Fn1 = bullets[i];	
        new Circle(Fn1.x, Fn1.y, 5, 0, "red").Draw();

		}
	}
	Shootbullet(){

		for(var i in bullets){	

			var Fn1 = bullets[i];
			let radians = Fn1.angle * Math.PI / 180
			
			Fn1.x -= Math.cos(radians) * 25;
			Fn1.y -= Math.sin(radians) * 25;	
		}
			//eliminar bullets al superar la ventana	
		for(var i in bullets){				
			var Fn1 = bullets[i];	

			if(Fn1.x<0 || Fn1.y<0){	
				bullets.splice(i, 1);
			}
			if(Fn1.x>canvas.width || Fn1.y>canvas.height){
			 bullets.splice(i, 1); 
			}
		}
	}
}
/*player*/