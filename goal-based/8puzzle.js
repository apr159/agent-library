var puzzle = function (initial){
	this.initial=initial;
}

puzzle.prototype.isGoal = function(current){
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
			cost: 1
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
}

puzzle.prototype.h = function(current){
	var h = 0;
	var distancia = 0;

	if(current.pos00!=1){
		if(current.pos00==2){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos00==3){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos00==4){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos00==5){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos00==6){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos00==7){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos00==8){
			distancia = 3;
			h = h + distancia;
		}
	}

	if(current.pos01!=2){
		if(current.pos01==1){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos01==3){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos01==4){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos01==5){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos01==6){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos01==7){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos01==8){
			distancia = 2;
			h = h + distancia;
		}
	}

	if(current.pos02!=3){
		if(current.pos02==1){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos02==2){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos02==4){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos02==5){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos02==6){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos02==7){
			distancia = 4;
			h = h + distancia;
		}

		if(current.pos02==8){
			distancia = 3;
			h = h + distancia;
		}
	}

	if(current.pos10!=4){
		if(current.pos10==1){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos10==2){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos10==3){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos10==5){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos10==6){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos10==7){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos10==8){
			distancia = 2;
			h = h + distancia;
		}
	}

	if(current.pos11!=5){
		if(current.pos11==1){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos11==2){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos11==3){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos11==4){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos11==6){
			distancia = 1
			h = h + distancia;
		}

		if(current.pos11==7){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos11==8){
			distancia = 1;
			h = h + distancia;
		}
	}

	if(current.pos12!=6){
		if(current.pos12==1){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos12==2){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos12==3){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos12==4){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos12==5){
			distancia = 1
			h = h + distancia;
		}

		if(current.pos12==7){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos12==8){
			distancia = 2;
			h = h + distancia;
		}
	}

	if(current.pos20!=7){
		if(current.pos20==1){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos20==2){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos20==3){
			distancia = 4;
			h = h + distancia;
		}

		if(current.pos20==4){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos20==5){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos20==6){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos20==8){
			distancia = 1;
			h = h + distancia;
		}
	}

	if(current.pos21!=8){
		if(current.pos21==1){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos21==2){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos21==3){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos21==4){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos21==5){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos21==6){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos21==7){
			distancia = 1;
			h = h + distancia;
		}
	}

	if(current.pos22!=0){
		if(current.pos22==1){
			distancia = 4;
			h = h + distancia;
		}

		if(current.pos22==2){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos22==3){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos22==4){
			distancia = 3;
			h = h + distancia;
		}

		if(current.pos22==5){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos22==6){
			distancia = 1;
			h = h + distancia;
		}

		if(current.pos22==7){
			distancia = 2;
			h = h + distancia;
		}

		if(current.pos22==8){
			distancia = 1;
			h = h + distancia;
		}
	}
	return h;
}

module.exports = puzzle;