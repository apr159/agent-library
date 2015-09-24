var WaterJug = function(initial){
	this.initial = initial;
}

WaterJug.prototype.isGoal = function(current){
	return current.glass1 === 2 && current.glass2 === 0
}

WaterJug.prototype.h = function(current){
	var h = 0;
	return h
}

WaterJug.prototype.successors = function(current){
	var successors = [];

	if (current.glass1<4){
		var succesor = {
			state :{glass1: 4,
					 glass2:current.glass2},
			action:'Llenar vaso 4',
			cost:1
			
		}
		successors.push(succesor);
	}

	if (current.glass2<3){
		var succesor = {
			state :{glass1: current.glass1,
					 glass2:3},
			action:'Llenar vaso 3',
			cost:1
			
		}
		successors.push(succesor);
	}

	if (current.glass1>0){
		var succesor = {
			state :{glass1: 0,
					 glass2:current.glass2},
			action:'Vaciar vaso 4',
			cost:1
			
		}
		successors.push(succesor);
	}

	if (current.glass2>0){
		var succesor = {
			state :{glass1: current.glass1,
					 glass2:0},
			action:'Vaciar vaso 3',
			cost:1
			
		}
		successors.push(succesor);
	}

	if (current.glass1 + current.glass2 >= 4 && current.glass1 + current.glass2 < 7 && current.glass2 > 0){
		var succesor = {
			state :{glass1: 4,
					 glass2:current.glass2-(4-current.glass1)},
			action:'Pasar de vaso 3 a vaso 4',
			cost:1
			
		}
		successors.push(succesor);
	}

	if (current.glass1 + current.glass2 >= 3 && current.glass1 + current.glass2 < 7 && current.glass1 > 0){
		var succesor = {
			state :{glass1: current.glass1-(3-current.glass2),
					 glass2:3},
			action:'Pasar de vaso 4 a vaso 3',
			cost:1
		}
		successors.push(succesor);
	}

	if (current.glass1 + current.glass2 <= 4 && current.glass2 > 0){
		var succesor = {
			state :{glass1: current.glass1+current.glass2,
					 glass2:0},
			action:'Pasar de vaso 3 a vaso 4',
			cost:1
		}
		successors.push(succesor);
	}

	if (current.glass1 + current.glass2 <= 3 && current.glass1 > 0){
		var succesor = {
			state :{glass1: 0,
					 glass2:current.glass1+current.glass2},
			action:'Pasar de vaso 4 a vaso 3',
			cost:1
		}
		successors.push(succesor);
	}



	

	return successors;
	
};

module.exports = WaterJug;