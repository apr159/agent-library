var puzzle = function (initial){
	this.initial=initial;
}

puzzle.prototype.isGoal=function(current){
	return current.pos00===1 && current.pos01===2 && current.pos02===3 &&
	       current.pos10===4 && current.pos11===5 && current.pos12===6 &&
	       current.pos20===7 && current.pos21===8 && current.pos22===0
}

puzzle.prototype.successors = function(current){
	var successors = [];

//cero en la posición [0,0]
    if (current.pos00==0){
        var successors1={
        	state:{
        	    pos00: current.pos01, pos01:             0, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
        	}, 
        	action: 'Left',
        	cost: 1
        }
        successors.push(successors1);
        
        var successors2={
            state:{
                pos00: current.pos10, pos01: current.pos01, pos02: current.pos02,
        	    pos10:             0, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
            },
            action: 'Up',
            cost: 1
        }
        successors.push(successors2);
    }

//cero en la posición [0,1]
    if(current.pos01==0){
        var successors1={
            state:{
                pos00:             0, pos01: current.pos00, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
            },
            action: 'Right',
            cost: 1
        }
        successors.push(successors1);

        var successors2={
            state:{
                pos00: current.pos00, pos01: current.pos02, pos02:             0,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
            }, 
            action: 'Left',
            cost: 1
        }
        successors.push(successors2)

        var successors3={
            state :{
                pos00: current.pos00, pos01: current.pos11, pos02: current.pos02,
        	    pos10: current.pos10, pos11:             0, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
            },
            action: 'Up',
            cost: 1
        }
       	successors.push(successors3);
	}	

//cero en la posición [0,2]
    if (current.pos02==0){
        var successors1={
        	state:{
        	    pos00: current.pos00, pos01:             0, pos02: current.pos01,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
        	}, 
        	action: 'Right',
        	cost: 1
        }
        successors.push(successors1);

        var successors2={
        	state:{
        		pos00: current.pos00, pos01: current.pos01, pos02: current.pos12,
        	    pos10: current.pos10, pos11: current.pos11, pos12:             0,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
        	}, 
        	action: 'Up',
        	cost: 1
        }
        successors.push(successors2);
	}

//cero en la posición [1,0]
	if(current.pos10==0){
		var successors1={
			state:{
				pos00:             0, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos00, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Down',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos20, pos11: current.pos11, pos12: current.pos12,
        	    pos20:             0, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Up',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
			    pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos11, pos11:             0, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Left',
			cost: 1
		}
		successors.push(successors3);
	}


//cero en la posición [1,1]
	if(current.pos11==0){
		var successors1={
			state:{
			    pos00: current.pos00, pos01:             0, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos01, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Down',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
			    pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos21, pos12: current.pos12,
        	    pos20: current.pos20, pos21:             0, pos22: current.pos22
			},
			action: 'Up',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
			    pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos12, pos12:             0,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Left',
			cost: 1
		}
		successors.push(successors3);

		var successors4={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10:             0, pos11: current.pos10, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Right',
			cost: 1
		}
		successors.push(successors4);
	}


//cero en la posición [1,2]
	if(current.pos12==0){
		var successors1={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02:             0,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos02,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Down',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos22,
        	    pos20: current.pos20, pos21: current.pos21, pos22:             0
			},
			action: 'Up',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11:             0, pos12: current.pos11,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Right',
			cost: 1
		}
		successors.push(successors3);
	}
	
//cero en la posición [2,0]
	if(current.pos20==0){
		var successors1={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10:             0, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos10, pos21: current.pos21, pos22: current.pos22
			},
			action: 'Down',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos21, pos21:             0, pos22: current.pos22
			},
			action: 'Left',
			cost: 1
		}
		successors.push(successors2);
	}

//cero en la posición [2,1]
	if(current.pos21==0){
		var successors1={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20:             0, pos21: current.pos20, pos22: current.pos22
			},
			action: 'Right',
			cost: 1
		}
		successors.push(successors1);

		var successors2={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11:             0, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos11, pos22: current.pos22
        	},
			action: 'Down',
			cost: 1
		}
		successors.push(successors2);

		var successors3={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21: current.pos22, pos22:             0
			},
			action: 'Left',
			cost: 1
		}
		successors.push(successors3);
	}

//cero en la posición [2,2]
	if(current.pos22==0){
		var successors1={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12: current.pos12,
        	    pos20: current.pos20, pos21:             0, pos22: current.pos21
			},
			action: 'Right',
			cost:1
		}
		successors.push(successors1);

		var successors2={
			state:{
				pos00: current.pos00, pos01: current.pos01, pos02: current.pos02,
        	    pos10: current.pos10, pos11: current.pos11, pos12:             0,
        	    pos20: current.pos20, pos21: current.pos21, pos22: current.pos12
			},
			action: 'Down',
			cost: 1
		}
		successors.push(successors2);
	}
	return successors;	
};

module.exports = puzzle;