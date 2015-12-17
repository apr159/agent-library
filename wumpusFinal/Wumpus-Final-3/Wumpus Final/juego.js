var player2 = require("./cazador");

var juego = function(initial){
	this.initial = initial;
}

juego.prototype.isGoal=function(current){
	return current.estado==="muerto" || current.play.getOro()==="1"
}

juego.prototype.successors = function (current){
	var successors=[];
	var play2 = new player2(current.place, current.M, current.N);

	//subir
	if (current.play.getY()+1 <= current.N) {
		var place2=current.place;
		play2=current.play;
		play2.setY(current.play.getY()+1);
		var sensacion2=current.play.sentir(current.place);
		var estado2=current.play.reaccion(current.place);
		var m2 = current.M;
		var n2 = current.N;

		var sucesor = {state: {
	  		place: place2,
	  		play: play2,		
	  		estado: estado2,
	 		M: m2,	
	  		N: n2,		
	  	     }, 

	  		action:'subio y sintio'+sensacion2,
	  		cost:1

	  	}
		successors.push(sucesor);
	};

	//bajar
	if (current.play.getY()-1 >= current.N) {
		var place2=current.place;
		play2=current.play;
		play2.setY(current.play.getY()-1);
		var sensacion2=current.play.sentir(current.place);
		var estado2=current.play.reaccion(current.place);
		var m2 = current.M;
		var n2 = current.N;

		var sucesor = {state: {
	  		place: place2,
	  		play: play2,		
	  		estado: estado2,
	 		M: m2,	
	  		N: n2,		
	  	     }, 

	  		action:'bajo y sintio'+sensacion2,
	  		cost:1

	  	}
		successors.push(sucesor);
	};

	//mov derecha
	if (current.play.getX()+1 <= current.M) {
		var place2=current.place;
		play2=current.play;
		play2.setX(current.play.getX()+1);
		var sensacion2=current.play.sentir(current.place);
		var estado2=current.play.reaccion(current.place);
		var m2 = current.M;
		var n2 = current.N;

		var sucesor = {state: {
	  		place: place2,
	  		play: play2,		
	  		estado: estado2,
	 		M: m2,	
	  		N: n2,		
	  	     }, 

	  		action:'se movio a la derecha y sintio'+sensacion2,
	  		cost:1

	  	}
		successors.push(sucesor);
	};

	//mov izq
	if (current.play.getX()-1 >= current.M) {
		var place2=current.place;
		play2=current.play;
		play2.setX(current.play.getX()-1);
		var sensacion2=current.play.sentir(current.place);
		var estado2=current.play.reaccion(current.place);
		var m2 = current.M;
		var n2 = current.N;

		var sucesor = {state: {
	  		place: place2,
	  		play: play2,		
	  		estado: estado2,
	 		M: m2,	
	  		N: n2,		
	  	     }, 

	  		action:'movio a la izq y sintio'+sensacion2,
	  		cost:1

	  	}
		successors.push(sucesor);
	};

	return successors;
}

module.exports = juego;