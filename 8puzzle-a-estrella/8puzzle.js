var puzzle = function(initial){
	this.initial = initial;
}

puzzle.prototype.isGoal = function(current){
	return current.piece1 === 1 && current.piece2 === 2 && current.piece3 == 3
		&& current.piece4 === 4 && current.piece5 === 5 && current.piece6 == 6
		&& current.piece7 === 7 && current.piece8 === 8 && current.piece9 == 0;
}

puzzle.prototype.h = function(current){
	
	var h=0;
	
	if(current.piece1 != 1)
		h++;

	if(current.piece2 != 2)
		h++;

	if(current.piece3 != 3)
		h++;

	if(current.piece4 != 4)
		h++;

	if(current.piece5 != 5)
		h++;

	if(current.piece6 != 6)
		h++;

	if(current.piece7 != 7)
		h++;

	if(current.piece8 != 8)
		h++;

	if(current.piece9 != 0)
		h++;

	return h;

}

puzzle.prototype.successors = function(current){
	var successors = [];

	if (current.piece1 == 0){
		var succesor1 = {
			state :{piece1: current.piece4, piece2: current.piece2, piece3: current.piece3,
					piece4: 0, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece2, piece2: 0, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
	}

	if (current.piece2 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece5, piece3: current.piece3,
					piece4: current.piece4, piece5: 0, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece3, piece3: 0,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
		var succesor3 = {
			state :{piece1: 0, piece2: current.piece1, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor3);
	}

	if (current.piece3 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece6,
					piece4: current.piece4, piece5: current.piece5, piece6: 0,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: 0, piece3: current.piece2,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor2);
	}

	if (current.piece4 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece7, piece5: current.piece5, piece6: current.piece6,
					piece7: 0, piece8: current.piece8, piece9: current.piece9},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece5, piece5: 0, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
		var succesor3 = {
			state :{piece1: 0, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece1, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor3);
	}
	
	if (current.piece5 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece8, piece6: current.piece6,
					piece7: current.piece7, piece8: 0, piece9: current.piece9},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece6, piece6: 0,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
		var succesor3 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: 0, piece5: current.piece4, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor3);
		var succesor4 = {
			state :{piece1: current.piece1, piece2: 0, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece2, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor4);
	}

	if (current.piece6 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece9,
					piece7: current.piece7, piece8: current.piece8, piece9: 0},
			action:'Arriba',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: 0, piece6: current.piece5,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor2);
		var succesor3 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: 0,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece3,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece9},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor3);
	}

	if (current.piece7 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: 0, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece4, piece8: current.piece8, piece9: current.piece9},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece8, piece8: 0, piece9: current.piece9},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);
	}

	if (current.piece8 == 0){

		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: 0, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece5, piece9: current.piece9},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor1);
		
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: current.piece9, piece9: 0},
			action:'Izquierda',
			cost:1
		}
		successors.push(succesor2);

		var succesor3 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: 0, piece8: current.piece7, piece9: current.piece9},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor3);
		
	}

	if (current.piece9 == 0){
		var succesor1 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: 0,
					piece7: current.piece7, piece8: current.piece8, piece9: current.piece6},
			action:'Abajo',
			cost:1
		}
		successors.push(succesor1);
		var succesor2 = {
			state :{piece1: current.piece1, piece2: current.piece2, piece3: current.piece3,
					piece4: current.piece4, piece5: current.piece5, piece6: current.piece6,
					piece7: current.piece7, piece8: 0, piece9: current.piece8},
			action:'Derecha',
			cost:1
		}
		successors.push(succesor2);
	}

	return successors;
	
};



module.exports = puzzle;