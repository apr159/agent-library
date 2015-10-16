
var Water = function(initial){
	this.initial = initial;
}

Water.prototype.isGoal = function(current){

	return current.jar1 === 2 && current.jar2 === 0
}

Water.prototype.successors = function(current){
	var successors = [];

	//Llenar 4
	if (current.jar1 < 4){
		var succesor = {
			state :{jar1: 4,
					 jar2:current.jar2},
			action:'Llenar vaso 1',
			cost:1
		}
		successors.push(succesor);
		

	}

	//Llenar 3
	if (current.jar2 < 3){
		var succesor = {
			state :{jar1:current.jar1 ,
					 jar2:3},
			action:'Llenar vaso 2',
			cost:1
		}
		successors.push(succesor);
		

	}

//Vaciar 4
	if (current.jar1 > 0){
		var succesor = {
			state :{jar1: 0,
					 jar2:current.jar2},
			action:'Vaciar vaso 1',
			cost:1
		}
		successors.push(succesor);
		

	}

	//Vaciar 3
	if (current.jar2 > 0){
		var succesor = {
			state :{jar1:current.jar1 ,
					 jar2:0},
			action:'Vaciar vaso 2',
			cost:1
		}
		successors.push(succesor);
		

	}

	// pasar vaso 2 a vaso 1 (parte 1)
	if (current.jar1 + current.jar2 > 4 && current.jar1 < 4){
		var succesor = {
			state :{jar1:4 ,
					 jar2:current.jar2 - (4-current.jar1)},
			action:'Pasar vaso 2 a vaso 1 (a)',
			cost:1
		}
		successors.push(succesor);
		
	}
	// pasar vaso 1 a vaso 2 (parte 1)
	if (current.jar1 + current.jar2 > 3 && current.jar2 < 3){
		var succesor = {
			state :{jar1:current.jar1-(3-current.jar2) ,
					 jar2:3},
			action:'Pasar vaso 1 a vaso 2 (a)',
			cost:1
		}
		successors.push(succesor);
		
	}

	// pasar vaso 2 a vaso 1 (parte 1)
	if (current.jar1 + current.jar2 <= 4 && current.jar2 > 0){
		var succesor = {
			state :{jar1:current.jar1 + current.jar2 ,
					 jar2:0},
			action:'Pasar vaso 2 a vaso 1',
			cost:1
		}
		successors.push(succesor);
		
	}
	// pasar vaso 1 a vaso 2 (parte 1)
	if (current.jar1 + current.jar2 <= 3 && current.jar1>0){
		var succesor = {
			state :{jar1:0 ,
					 jar2:current.jar1 + current.jar2},
			action:'Pasar vaso 1 a vaso 2',
			cost:1
		}
		successors.push(succesor);
		
	}

	

	return successors;
	
};

module.exports = Water;