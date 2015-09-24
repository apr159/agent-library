var puzzle = function (initial){
	this.initial=initial;
}

puzzle.prototype.isGoal=function(current){
	return current.position00===1 && current.position01===2 && current.position02===3 &&
	       current.position10===4 && current.position11===5 && current.position12===6 &&
	       current.position20===7 && current.position21===8 && current.position22===0
}

puzzle.prototype.successors = function(current){
	var successors = [];

//cero en la posición [0,0]
    if (current.position00==0){
        var successors1={
        	state:{
        	    position00: current.position01, position01:             0, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
        	}, 
        	action: 'Mover Izquierda',
        	cost: 1
        }
        successors.push(successors1);
        
        var successors2={
            state:{
                position00: current.position10, position01: current.position01, position02: current.position02,
        	    position10:             0, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
            },
            action: 'Mover Arriba',
            cost: 1
        }
        successors.push(successors2);
    }

//cero en la posición [0,1]
    if(current.position01==0){
        var successors1={
            state:{
                position00:             0, position01: current.position00, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
            },
            action: 'Mover Derecha',
            cost: 1
        }
        successors.push(successors1);

        var successors2={
            state:{
                position00: current.position00, position01: current.position02, position02:             0,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
            }, 
            action: 'Mover Izquierda',
            cost: 1
        }
        successors.push(successors2)

        var successors3={
            state :{
                position00: current.position00, position01: current.position11, position02: current.position02,
        	    position10: current.position10, position11:             0, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
            },
            action: 'Mover Arriba',
            cost: 1
        }
       	successors.push(successors3);
	}	

//cero en la posición [0,2]
    if (current.position02==0){
        var successors1={
        	state:{
        	    position00: current.position00, position01:             0, position02: current.position01,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
        	}, 
        	action: 'Mover Derecha',
        	cost: 1
        }
        successors.push(successors1);

        var successors2={
        	state:{
        		position00: current.position00, position01: current.position01, position02: current.position12,
        	    position10: current.position10, position11: current.position11, position12:             0,
        	    position20: current.position20, position21: current.position21, position22: current.position22
        	}, 
        	action: 'Mover Arriba',
        	cost: 1
        }
        successors.push(successors2);
	}

//cero en la posición [1,0]
	if(current.position10==0){
		var successors1={
			state:{
				position00:             0, position01: current.position01, position02: current.position02,
        	    position10: current.position00, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Abajo',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position20, position11: current.position11, position12: current.position12,
        	    position20:             0, position21: current.position21, position22: current.position22
			},
			action: 'Mover Arriba',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
			    position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position11, position11:             0, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Izquierda',
			cost: 1
		}
		successors.push(successors3);
	}


//cero en la posición [1,1]
	if(current.position11==0){
		var successors1={
			state:{
			    position00: current.position00, position01:             0, position02: current.position02,
        	    position10: current.position10, position11: current.position01, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Abajo',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
			    position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position21, position12: current.position12,
        	    position20: current.position20, position21:             0, position22: current.position22
			},
			action: 'Mover Arriba',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
			    position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position12, position12:             0,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Izquierda',
			cost: 1
		}
		successors.push(successors3);

		var successors4={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10:             0, position11: current.position10, position12: current.position12,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Derecha',
			cost: 1
		}
		successors.push(successors4);
	}


//cero en la posición [1,2]
	if(current.position12==0){
		var successors1={
			state:{
				position00: current.position00, position01: current.position01, position02:             0,
        	    position10: current.position10, position11: current.position11, position12: current.position02,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Abajo',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position22,
        	    position20: current.position20, position21: current.position21, position22:             0
			},
			action: 'Mover Arriba',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11:             0, position12: current.position11,
        	    position20: current.position20, position21: current.position21, position22: current.position22
			},
			action: 'Mover Derecha',
			cost: 1
		}
		successors.push(successors3);
	}
	
//cero en la posición [2,0]
	if(current.position20==0){
		var successors1={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10:             0, position11: current.position11, position12: current.position12,
        	    position20: current.position10, position21: current.position21, position22: current.position22
			},
			action: 'Mover Abajo',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position21, position21:             0, position22: current.position22
			},
			action: 'Mover Izquierda',
			cost: 1
		}
		successors.push(successors2);
	}

//cero en la posición [2,1]
	if(current.position21==0){
		var successors1={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20:             0, position21: current.position20, position22: current.position22
			},
			action: 'Mover Izquierda',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11:             0, position12: current.position12,
        	    position20: current.position20, position21: current.position11, position22: current.position22
        	},
			action: 'Mover Abajo',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21: current.position22, position22:             0
			},
			action: 'Mover Izquierda',
			cost: 1
		}
		successors.push(successors3);
	}

//cero en la posición [2,2]
	if(current.position22==0){
		var successors1={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12: current.position12,
        	    position20: current.position20, position21:             0, position22: current.position21
			},
			action: 'Mover Derecha',
			cost:1
		}
		successors.push(successors1);

		var successors2={
			state:{
				position00: current.position00, position01: current.position01, position02: current.position02,
        	    position10: current.position10, position11: current.position11, position12:             0,
        	    position20: current.position20, position21: current.position21, position22: current.position12
			},
			action: 'Mover Abajo',
			cost: 1
		}
		successors.push(successors2);
	}
	return successors;	
};

module.exports = puzzle;