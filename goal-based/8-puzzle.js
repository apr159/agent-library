var Puzzle8 = function(initial){
	this.initial = initial;
}

Puzzle8.prototype.isGoal = function(current){

	return current.slot1 == "Pieza1" && current.slot2 == "Pieza2" &&
		current.slot3 == "Pieza3" && current.slot4 == "Pieza4" &&
		current.slot5 == "Pieza5" && current.slot6 == "Pieza6" &&
		current.slot7 == "Pieza7" && current.slot8 == "Pieza8" &&
		current.slot9 == "Pieza0"
}

Puzzle8.prototype.h = function(current){
	var h =0;

	current.slot1 == "Pieza1" ? h : h++;
	current.slot2 == "Pieza2" ? h : h++;
	current.slot3 == "Pieza3" ? h : h++;
	current.slot4 == "Pieza4" ? h : h++;
	current.slot5 == "Pieza5" ? h : h++;
	current.slot6 == "Pieza6" ? h : h++;
	current.slot7 == "Pieza7" ? h : h++;
	current.slot8 == "Pieza8" ? h : h++;
	current.slot9 == "Pieza0" ? h : h++;

	return h
}

Puzzle8.prototype.successors = function(current){
	var successors = [];

	if (current.slot1 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot2,
				slot2: current.slot1,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Izquierda',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot4,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot1,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Arriba',
			cost: 1
		}
		successors.push(succesor);
	}

	if (current.slot2 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot2,
				slot2: current.slot1,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Derecha',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot5,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot2,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Arriba',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot3,
				slot3: current.slot2,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Izquierda',
			cost: 1
		}
		successors.push(succesor);
	}	

	if (current.slot3 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot3,
				slot3: current.slot2,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Derecha',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot6,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot3,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Arriba',
			cost: 1
		}
		successors.push(succesor);
	}	

	if (current.slot4 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot5,
				slot5: current.slot4,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Izquierda',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot7,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot4,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Arriba',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot4,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot1,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Abajo',
			cost: 1
		}
		successors.push(succesor);
	}	

	if (current.slot5 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot6,
				slot6: current.slot5,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Izquierda',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot8,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot5,
				slot9: current.slot9,
			},
			action: 'Arriba',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot5,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot2,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Abajo',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot5,
				slot5: current.slot4,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Derecha',
			cost: 1
		}
		successors.push(succesor);
	}

	if (current.slot6 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot6,
				slot6: current.slot5,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Derecha',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot9,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot6,
			},
			action: 'Arriba',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot6,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot3,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Abajo',
			cost: 1
		}
		successors.push(succesor);

	}

	if (current.slot7 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot8,
				slot8: current.slot7,
				slot9: current.slot9,
			},
			action: 'Izquierda',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot7,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot4,
				slot8: current.slot8,
				slot9: current.slot9,
			},
			action: 'Abajo',
			cost: 1
		}
		successors.push(succesor);

	}

	if (current.slot8 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot9,
				slot9: current.slot8,
			},
			action: 'Derecha',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot8,
				slot8: current.slot7,
				slot9: current.slot9,
			},
			action: 'Izquierda',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot8,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot5,
				slot9: current.slot9,
			},
			action: 'Abajo',
			cost: 1
		}
		successors.push(succesor);

	}

	if (current.slot9 == "Pieza0"){
		var succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot6,
				slot7: current.slot7,
				slot8: current.slot9,
				slot9: current.slot8,
			},
			action: 'Derecha',
			cost: 1
		}
		successors.push(succesor);

		succesor = {
			state:{
				slot1: current.slot1,
				slot2: current.slot2,
				slot3: current.slot3,
				slot4: current.slot4,
				slot5: current.slot5,
				slot6: current.slot9,
				slot7: current.slot7,
				slot8: current.slot8,
				slot9: current.slot6,
			},
			action: 'Abajo',
			cost: 1
		}
		successors.push(succesor);

	}

	return successors;

};

module.exports = Puzzle8;