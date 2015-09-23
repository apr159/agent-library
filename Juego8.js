var Juego8 = function(initial){
	this.initial = initial;
}

Juego8.prototype.isGoal = function(current){
	return current.espacio1 === 1 && current.espacio2 === 2 && current.espacio3===3 &
        current.espacio4 === 4 && current.espacio5 === 5 && current.espacio6===6 &
         current.espacio7 === 7 && current.espacio8 === 8 && current.espacio9===0;
}

Juego8.prototype.successors = function(current){
	var successors = [];

if (current.espacio1:0){
		
		var succesor1= {
			state :{espacio1:current.espacio2, espacio2:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2= {
			state :{espacio1:current.espacio4, espacio4:0
					 espacio4:4},
			action:'No me muevo',
			cost:1
		}
		successors.push(succesor2);

if (current.espacio2:0){
		
		var succesor1 = {
			state :{espacio2:current.espacio1, espacio1:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio2:current.espacio3, espacio3:0},
			action:'Movimiento a la derecha',
			cost:1
		}
		successors.push(succesor2);
succesor3 = {
			state :{espacio2:current.espacio5, espacio5:0},
			action:'Movimiento hacia abajo',
			cost:1
		}
		successors.push(succesor3);

if (current.espacio3:0){
		
		var succesor1= {
			state :{espacio3:current.espacio2, espacio2:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio3:current.espacio6, espacio6:0},
			action:'Movimiento hacia abajo',
			cost:1
		}
			successors.push(succesor2);
	}

if (current.espacio4:0){
		
		var succesor1 = {
			state :{espacio4:current.espacio1, espacio1:0},
			action:'Movimiento hacia arriba',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio4:current.espacio5, espacio5:0},
			action:'Movimiento a la derecha',
			cost:1
		}
			successors.push(succesor2);
	}
succesor3= {
			state :{espacio4:current.espacio7, espacio7:0},
			action:'Movimiento hacia abajo',
			cost:1
		}
			successors.push(succesor3);
	}

if (current.espacio5:0){
		
		var succesor1 = {
			state :{espacio5:current.espacio2, espacio2:0},
			action:'Movimiento hacia arriba',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio5:current.espacio4, espacio4:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
			successors.push(succesor2);
	}
succesor3 = {
			state :{espacio5:current.espacio6, espacio6:0},
			action:'Movimiento a la derecha',
			cost:1
		}
			successors.push(succesor3);
	}
succesor4 = {
			state :{espacio5:current.espacio8, espacio8:0},
			action:'Movimiento hacia abajo',
			cost:1
		}
			successors.push(succesor4);
	}

if (current.espacio6:0){
		
		var succesor1 = {
			state :{espacio6:current.espacio3, espacio3:0},
			action:'Movimiento hacia arriba',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio6:current.espacio5, espacio5:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
			successors.push(succesor2);
	}
succesor3 = {
			state :{espacio6:current.espacio9, espacio9:0},
			action:'Movimiento hacia abajo',
			cost:1
		}
			successors.push(succesor3);
	}

if (current.espacio7:0){
		
		var succesor1 = {
			state :{espacio7:current.espacio4, espacio4:0},
			action:'Movimiento hacia arriba',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio7:current.espacio8, espacio8:0},
			action:'Movimiento a la derecha',
			cost:1
		}
			successors.push(succesor2);
	}


if (current.espacio8:0){
		
		var succesor1 = {
			state :{espacio8:current.espacio5, espacio5:0},
			action:'Movimiento hacia arriba',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio8:current.espacio7, espacio7:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
			successors.push(succesor2);
	}
succesor3 = {
			state :{espacio8:current.espacio9, espacio9:0},
			action:'Movimiento a la derecha',
			cost:1
		}
			successors.push(succesor3);
	}

if (current.espacio9:0){
		
		var succesor1 = {
			state :{espacio9:current.espacio6, espacio6:0},
			action:'Movimiento hacia arriba',
			cost:1
		}
		successors.push(succesor1);
	}
succesor2 = {
			state :{espacio9:current.espacio8, espacio8:0},
			action:'Movimiento a la izquierda',
			cost:1
		}
			successors.push(succesor2);
	}


	return successors;
	
};

module.exports = Juego8;
