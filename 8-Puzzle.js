var Puzzle = funtion (initial){
	this.initial=initial;
}

Puzzle.prototype.isGoal=function(current){
	return current.celda1===1 && current.celda2===2 && current.celda3===3 && current.celda4===4 && current.celda5===5 && current.celda6===6 && current.celda7===7 && current.celda8===8 && current.celda9===0 
}

Puzzle.prototype.successors=function(current){
	var successors=[];

//CASO 1 (cero en celda1)
        if (current.celda1==0){
        	var successors1={
        		state:{celda1: current.celda2, celda2: 0, celda3: current.celda3, celda4: current.celda4, celda5: current.celda5, celda6: current.celda6, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
        	}, 
        	action: 'Izquierda',
        	cost: 1
        }
        successors.push(successors1);
        var successors2={
        state :{celda1: current.celda4, celda2: current.piece2, celda3: current.celda3, celda4: 0, celda5: current.celda5, celda6: current.celda6, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
        },
        action:'Arriba',
        cost:1
        }
        successors.push(successors2);
}

//CASO 2 (cero en celda2)
       if(current.celda2==0){
       var successors1 = {
           state :{celda2: current.celda1, celda1: 0, celda3: current.celda3, celda4: current.celda4, celda5: current.celda5, celda6: current.celda6, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
           },
         action:'Derecha',
         cost:1
       }
         successors.push(successors1);

         var successors2={
           state :{celda2: current.celda5, celda1: current.celda1, celda3: current.celda3, celda4: current.celda4, celda5: 0, celda6: current.celda6, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
           }, 
           action:'Arriba',
           cost:1
         }
         successors.push(successors2)

        var successors3 = {
        state :{celda2: current.celda3, celda1: current.celda1,  celda3: 0, celda4: current.celda4, celda5: current.celda5, celda6: current.celda6, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
        },
        action:'Izquierda',
        cost:1
        }
        successors.push(successors3);
}

//CASO 3 (cero en celda3)
        if (current.celda3==0){
        	var successors1={
        		state:{celda3: current.celda2, celda1: current.celda1, celda2: 0, celda4: current.celda4, celda5: current.celda5, celda6: current.celda6, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
        	}, 
        	action: 'Derecha',
        	cost: 1
        }
        successors.push(successors1);

      var successors2={
        		state:{celda3: current.celda6, celda1: current.celda1, celda2: current.celda2,  celda4: current.celda4, celda5: current.celda5, celda6: 0, celda7: current.piece7, celda8: current.celda8, celda9: current.celda9
        	}, 
        	action: 'Arriba',
        	cost: 1
        }
        successors.push(successors2);
}

// CASO 4 (cero en celda 4)
	if(current.celda4==0){
		var successors1={
			state:{
			celda4: current.celda1, celda1: 0, celda2: current.celda2, celda3: current.celda3, celda5: current.celda5, celda6: current.celda6, celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Bajar',
			cost:1
		}
		successors.push(successors1);

		var successors2={
			state:{
			celda4: current.celda7, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda5: current.celda5, celda6: current.celda6, celda7: 0, celda8: current.celda8, celda9: current.celda9
			},
			action:'Subir',
			cost:1
		}
		successors.push(successors2);

		var successors3={
			state:{
			celda4: current.celda5, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda5: 0, celda6: current.celda6, celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(successors3);
	}


// CASO 5 (cero en celda 5)
	if(current.celda5==0){
		var successors1={
			state:{
			celda5: current.celda2, celda1: current.celda1, celda2: 0, celda3: current.celda3, celda4: current.celda4, celda6: current.celda6, celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Bajar',
			cost:1
		}
		successors.push(successors1);

		var successors2={
			state:{
			celda5: current.celda8, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4, celda6: current.celda6, celda7: current.celda7, celda8: 0, celda9: current.celda9
			},
			action:'Subir',
			cost:1
		}
		successors.push(successors2);

		var successors3={
			state:{
			celda5: current.celda4, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: 0, celda6: current.celda6, celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Derecha',
			cost:1
		}
		successors.push(successors3);

		var successors4={
			state:{
			celda5: current.celda6, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4, celda6: 0, celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(successors4);
	}


// CASO 6 (cero en celda 6)
	if(current.celda6==0){
		var successors1={
			state:{
			celda6: current.celda3, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4, celda5: current.celda5,  celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Bajar',
			cost:1
		}
		successors.push(successors1);

		var successors2={
			state:{
			celda6: current.celda9, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4, celda5: current.celda5, celda7: current.celda7, celda8: current.celda8, celda9: 0
			},
			action:'Subir',
			cost:1
		}
		successors.push(successors2);

		var successors3={
			state:{
			celda6: current.celda5, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4, celda5: 0, celda7: current.celda7, celda8: current.celda8, celda9: current.celda9
			},
			action:'Derecha',
			cost:1
		}
		successors.push(successors3);
	}
	
//CASO 7 (cero en la celda 7)
	if(current.celda7==0){
		var successors1={
			state:{
			celda7: current.celda4, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: 0, celda5: current.celda5, celda6: current.celda6, celda8: current.celda8, celda9: current.celda9
			},
			action:'Bajar',
			cost:1
		}
		successors.push(successors1);
		var successors2={
			state:{
			celda7: current.celda8, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4, celda5: current.celda5, celda6: current.celda6, celda8: 0, celda9: current.celda9
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(successors2);
	}
//CASO 8 (cero en la celda 8)
	if(current.celda8==0){
		var successors1={
			state:{
			celda8: current.celda5, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4,celda5: 0, celda6: current.celda6, celda7: current.celda7, celda9: current.celda9
			},
			action:'Bajar',
			cost:1
		}
		successors.push(successors1);
		var successors2={
			state:{
			celda8: current.celda9, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4,celda5: current.celda5, celda6: current.celda6, celda7: current.celda7, celda9: 0
			},
			action:'Izquierda',
			cost:1
		}
		successors.push(successors2);
		var successors3={
			state:{
			celda8: current.celda7, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4,celda5: current.celda5, celda6: current.celda6, celda7: 0, celda9: current.celda9
			},
			action:'Derecha',
			cost:1
		}
		successors.push(successors3);
	}
//CASO 9 (cero en la celda 9)
	if(current.celda9==0){
		var successors1={
			state:{
			celda9: current.celda8, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4,celda5: current.celda5, celda6: current.celda6, celda7: current.celda7, celda8: 0
			},
			action:'Derecha',
			cost:1
		}
		successors.push(successors1);
		var successors2={
			state:{
			celda9: current.celda6, celda1: current.celda1, celda2: current.celda2, celda3: current.celda3, celda4: current.celda4,celda5: current.celda5, celda6: 0, celda7: current.celda7, celda8: current.celda8
			},
			action:'Abajo',
			cost:1
		}
		successors.push(successors2);
}
