var Puzzle = function(initial){
	this.initial = initial;
}

Puzzle.prototype.isGoal = function(current){
	return current.Cuadro11===1 && current.Cuadro12===2 && current.Cuadro13===3 && 
	current.Cuadro21===4 && current.Cuadro22===5 && current.Cuadro23===6 && 
	current.Cuadro31===7 && current.Cuadro32===8 && current.Cuadro33===0
}

Puzzle.prototype.successors = function(current){
	var successors = [];
	if (current.Cuadro11==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro12, Cuadro12:current.Cuadro11, Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21, Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23, 
				Cuadro31:current.Cuadro31, Cuadro32:current.Cuadro32, Cuadro33:current.Cuadro33
			},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro21,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro11,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor2);
	}
	if(current.Cuadro12==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro13,Cuadro13:current.Cuadro12,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro12,Cuadro12:current.Cuadro11,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
		var succesor3={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro22,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro12,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor3);
	}
	if(current.Cuadro13==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro13,Cuadro13:current.Cuadro12,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro23,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro13,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor2);
	}
	if(current.Cuadro21==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro22,Cuadro22:current.Cuadro21,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro21,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro11,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor2);
		var succesor3={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro31,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro21,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor3);
	}
	if(current.Cuadro22==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro23,Cuadro23:current.Cuadro22,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro22,Cuadro22:current.Cuadro21,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Izquierda',	
			cost:1
		}
		successors.push(succesor2);
		var succesor3={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro22,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro12,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor3);
		var succesor4={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro32,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro22,Cuadro33:current.Cuadro33
			},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor4);
	}
	if(current.Cuadro23==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro23,Cuadro23:current.Cuadro22,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro23,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro13,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor2);
			var succesor3={
				state:{
					Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
					Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro33,
					Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro23
				},
				action:'Abajo',
				cost:1
			}
			successors.push(succesor3);
			}
	if(current.Cuadro31==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro32,Cuadro32:current.Cuadro31,Cuadro33:current.Cuadro33
			},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro31,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro21,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro33
			},
			action:'Arriba',
			Cost:1
		}
		successors.push(succesor2);
	}
	if(current.Cuadro32==0){
		var succesor1={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro33,Cuadro33:current.Cuadro32
			},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor1);
		var succesor2={
			state:{
				Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
				Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
				Cuadro31:current.Cuadro32,Cuadro32:current.Cuadro31,Cuadro33:current.Cuadro33
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
			var succesor3={
				state:{
					Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
					Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro32,Cuadro23:current.Cuadro23,
					Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro22,Cuadro33:current.Cuadro33
				},
				action:'Arriba',
				cost:1
			}
			successors.push(succesor3);
		}
		if(current.Cuadro33==0){
			var succesor1={
				state:{
					Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
					Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro23,
					Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro33,Cuadro33:current.Cuadro32						
				},
				action:'Izquierda',
				cost:1
			}
			successors.push(succesor1);
			var succesor2={
				state:{
					Cuadro11:current.Cuadro11,Cuadro12:current.Cuadro12,Cuadro13:current.Cuadro13,
					Cuadro21:current.Cuadro21,Cuadro22:current.Cuadro22,Cuadro23:current.Cuadro33,
					Cuadro31:current.Cuadro31,Cuadro32:current.Cuadro32,Cuadro33:current.Cuadro23
				},
				action:'Arriba',
				cost:1
			}
			successors.push(succesor2);
		}
	return successors;
}
};

module.exports = Puzzle;