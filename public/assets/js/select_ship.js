let Select_Ship = {

	background:function(W,H){

		new Square(0,0,W,H,0,"Upper-Left","#619A38").Draw();

	},

	type_ship:function(){

			if(Keyboard["m"]==true && scene=="select_ship" && Tecla_presionada==0){


				add_new_player({id:id_player,name:"All", ship:{X:50,Y:50}})

			}

	}
}

