var WaterJug = function(initial){
	this.initial = initial;
}

WaterJug.prototype.isGoal = function(current){
	 return current.n1 === 11 && current.n2===12 && current.n3===13 && current.n4===21 && current.n5===22 && current.n6===23 && current.n7===31 && current.n8===32 && current.n0===33    
}

WaterJug.prototype.successors = function(current){
	var successors = [];
	var hn1, hn2, hn3, hn4, hn5, hn6, hn7, hn8;
	hn1=current.n1;
	hn2=current.n2;
	hn3=current.n3;
	hn4=current.n4;
	hn5=current.n5;
	hn6=current.n6;
	hn7=current.n7;
	hn8=current.n8;

	//bajar cuadro cero
	  if ((current.n0+10)<34) {
	  	var help=current.n0+10;
	  	var help1=current.n0-10;
	  	if (current.n1==(help)) { hn1=current.n1-10;};
	  	if (current.n2==(help)) { hn2=current.n2-10;};
	  	if (current.n3==(help)) { hn3=current.n3-10;};
	  	if (current.n4==(help)) { hn4=current.n4-10;};
	  	if (current.n5==(help)) { hn5=current.n5-10;};
	  	if (current.n6==(help)) { hn6=current.n6-10;};
	  	if (current.n7==(help)) { hn7=current.n7-10;};
	  	if (current.n8==(help)) { hn8=current.n8-10;};

	  	var succesor = {state: {
	  		n1: hn1,
	  		n2: hn2,	
	  		n3: hn3,	
	  		n4: hn4,
	 		n5: hn5,	
	  		n6: hn6,	
	  		n7: hn7,	
	  		n8: hn8,	
	  		n0: current.n0+10	
	  	     }, 

	  		action:'bajar cuadro 0',
	  		cost:1

	  	}
	  	successors.push(succesor);
	  };


	  //mover a la derecha cuadro cero
	  if ( ((current.n0+1)<14) || ((current.n0+1)<24) || ((current.n0+1)<34) ) {
	  	var help=current.n0+1;
	  	var help1=current.n0-1;
	  	if (current.n1==(help)) { hn1=current.n1-1;};
	  	if (current.n2==(help)) { hn2=current.n2-1;};
	  	if (current.n3==(help)) { hn3=current.n3-1;};
	  	if (current.n4==(help)) { hn4=current.n4-1;};
	  	if (current.n5==(help)) { hn5=current.n5-1;};
	  	if (current.n6==(help)) { hn6=current.n6-1;};
	  	if (current.n7==(help)) { hn7=current.n7-1;};
	  	if (current.n8==(help)) { hn8=current.n8-1;};

	  	var succesor = {state: {
	  		n1: hn1,
	  		n2: hn2,	
	  		n3: hn3,	
	 		n4: hn4,
	  		n5: hn5,	
	  		n6: hn6,	
	 		n7: hn7,	
	  		n8: hn8,	
	  		n0: current.n0+1	
	  	     }, 

	  		action:'mover der cuadro 0',
	  		cost:1

	  	}
	  	successors.push(succesor);
	  };

	  //mover arriba cuadro cero
	  if ((current.n0-10)>10) {
	  	var help=current.n0-10;
	  	var help1=current.n0+10;
	  	if (current.n1==(help)) { hn1=current.n1+10;};
	  	if (current.n2==(help)) { hn2=current.n2+10;};
	  	if (current.n3==(help)) { hn3=current.n3+10;};
	  	if (current.n4==(help)) { hn4=current.n4+10;};
	  	if (current.n5==(help)) { hn5=current.n5+10;};
	  	if (current.n6==(help)) { hn6=current.n6+10;};
	  	if (current.n7==(help)) { hn7=current.n7+10;};
	  	if (current.n8==(help)) { hn8=current.n8+10;};

	  	var succesor = {state: {
	  		n1: hn1,
	  		n2: hn2,	
	  		n3: hn3,	
	  		n4: hn4,
	 		n5: hn5,	
	  		n6: hn6,	
	  		n7: hn7,	
	  		n8: hn8,	
	  		n0: current.n0-10	
	  	     }, 

	  		action:'subir cuadro 0',
	  		cost:1

	  	}
	  	successors.push(succesor);
	  };

 //mover a la izquierda cuadro cero
	  if ( ((current.n0-1)>10) || ((current.n0-1)>20) || ((current.n0-1)>30) ) {
	  	var help=current.n0-1;
	  	var help1=current.n0+1;
	  	if (current.n1==(help)) { hn1=current.n1+1;};
	  	if (current.n2==(help)) { hn2=current.n2+1;};
	  	if (current.n3==(help)) { hn3=current.n3+1;};
	  	if (current.n4==(help)) { hn4=current.n4+1;};
	  	if (current.n5==(help)) { hn5=current.n5+1;};
	  	if (current.n6==(help)) { hn6=current.n6+1;};
	  	if (current.n7==(help)) { hn7=current.n7+1;};
	  	if (current.n8==(help)) { hn8=current.n8+1;};

	  	var succesor = {state: {
	  		n1: hn1,
	  		n2: hn2,	
	  		n3: hn3,	
	 		n4: hn4,
	  		n5: hn5,	
	  		n6: hn6,	
	 		n7: hn7,	
	  		n8: hn8,	
	  		n0: current.n0-1	
	  	     }, 

	  		action:'mover izq cuadro 0',
	  		cost:1

	  	}
	  	successors.push(succesor);
	  };


	return successors;
	
};

module.exports = WaterJug;