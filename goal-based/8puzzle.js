var puzzle8 = function(initial){
	this.initial = initial;
}

puzzle8.prototype.isGoal = function(current){
	return 	current.slot_1 === 1 && 
			current.slot_2 === 2 &&
			current.slot_3 === 3 &&
			current.slot_4 === 4 &&
			current.slot_5 === 5 &&
			current.slot_6 === 6 &&
			current.slot_7 === 7 &&
			current.slot_8 === 8 &&
			current.slot_9 === -1;
}


/*
Se crea la funcion h, que es la que calculará el heurístico de cada estado

*/

puzzle8.prototype.h = function(current){
	var h=0;

	if(current.slot_1 == 1){h;}else{h++;}
	if(current.slot_2 == 2){h;}else{h++;}
	if(current.slot_3 == 3){h;}else{h++;}
	if(current.slot_4 == 4){h;}else{h++;}
	if(current.slot_5 == 5){h;}else{h++;}
	if(current.slot_6 == 6){h;}else{h++;}
	if(current.slot_7 == 7){h;}else{h++;}
	if(current.slot_8 == 8){h;}else{h++;}
	if(current.slot_9 == -1){h;}else{h++;}

	return h

}

puzzle8.prototype.successors = function(current){
	var successors = [];

	if (current.slot_1 == -1){
		var succesor_L = {
			state :{
				slot_1 : current.slot_2, 
				slot_2 : -1,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'LEFT',
			cost:1
		}
		successors.push(succesor_L);
		
		var succesor_U = {
			state :{
				slot_1 : current.slot_4, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : -1,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'UP',
			cost:1
		}
		successors.push(succesor_U);
	}

if (current.slot_2 == -1){
		var succesor_L = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_3,
				slot_3 : -1,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'LEFT',
			cost:1
		}
		successors.push(succesor_L);
		
		var succesor_R = {
			state :{
				slot_1 : -1, 
				slot_2 : current.slot_1,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'RIGHT',
			cost:1
		}
		successors.push(succesor_R);

		var succesor_U = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_5,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : -1,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'UP',
			cost:1
		}
		successors.push(succesor_U);
	}

if (current.slot_3 == -1){
		var succesor_R = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : -1,
				slot_3 : current.slot_2,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'RIGHT',
			cost:1
		}
		successors.push(succesor_R);
		
		var succesor_U = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_6,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : -1,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'UP',
			cost:1
		}
		successors.push(succesor_U);
}

if (current.slot_4 == -1){
		var succesor_L = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_5,
				slot_5 : -1,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'LEFT',
			cost:1
		}
		successors.push(succesor_L);
		
		var succesor_U = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_7,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : -1,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'UP',
			cost:1
		}
		successors.push(succesor_U);

		var succesor_D = {
			state :{
				slot_1 : -1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_1,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'DOWN',
			cost:1
		}
		successors.push(succesor_D);

	}

if (current.slot_5 == -1){
		var succesor_L = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_6,
				slot_6 : -1,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'LEFT',
			cost:1
		}
		successors.push(succesor_L);
		
		var succesor_R = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : -1,
				slot_5 : current.slot_4,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'RIGHT',
			cost:1
		}
		successors.push(succesor_R);

		var succesor_U = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_8,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : -1,
				slot_9 : current.slot_9
			},
			action:'UP',
			cost:1
		}
		successors.push(succesor_U);

		var succesor_D = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : -1,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_2,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'DOWN',
			cost:1
		}
		successors.push(succesor_D);
	}

if (current.slot_6 == -1){
		var succesor_R = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : -1,
				slot_6 : current.slot_5,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'RIGHT',
			cost:1
		}
		successors.push(succesor_R);

		var succesor_U = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_9,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : -1
			},
			action:'UP',
			cost:1
		}
		successors.push(succesor_U);

		var succesor_D = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : -1,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_3,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'DOWN',
			cost:1
		}
		successors.push(succesor_D);
}

if (current.slot_7 == -1){
		var succesor_L = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_8,
				slot_8 : -1,
				slot_9 : current.slot_9
			},
			action:'LEFT',
			cost:1
		}
		successors.push(succesor_L);

		var succesor_D = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : -1,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_4,
				slot_8 : current.slot_8,
				slot_9 : current.slot_9
			},
			action:'DOWN',
			cost:1
		}
		successors.push(succesor_D);
}

if (current.slot_8 == -1){
		var succesor_L = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_9,
				slot_9 : -1
			},
			action:'LEFT',
			cost:1
		}
		successors.push(succesor_L);

		var succesor_R = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : -1,
				slot_8 : current.slot_7,
				slot_9 : current.slot_9
			},
			action:'RIGHT',
			cost:1
		}
		successors.push(succesor_R);

		var succesor_D = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : -1,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : current.slot_5,
				slot_9 : current.slot_9
			},
			action:'DOWN',
			cost:1
		}
		successors.push(succesor_D);
}

if (current.slot_9 == -1){
		var succesor_R = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : current.slot_6,
				slot_7 : current.slot_7,
				slot_8 : -1,
				slot_9 : current.slot_8
			},
			action:'RIGHT',
			cost:1
		}
		successors.push(succesor_R);
		
		var succesor_D = {
			state :{
				slot_1 : current.slot_1, 
				slot_2 : current.slot_2,
				slot_3 : current.slot_3,
				slot_4 : current.slot_4,
				slot_5 : current.slot_5,
				slot_6 : -1,
				slot_7 : current.slot_7,
				slot_8 : current.slot_8,
				slot_9 : current.slot_6
			},
			action:'DOWN',
			cost:1
		}
		successors.push(succesor_D);
}
	

	return successors;
};

module.exports = puzzle8;