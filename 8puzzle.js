var.8puzzle = function(initial){
	this.initial = initial;
}
.8puzzle.prototype.isGoal = function(current){
	return current.none1 === 1 && current.none2 === 2 && current.none3===3 &&
        current.none4 === 4 && current.none5 === 5 && current.none6===6 &&
         current.none7 === 7 && current.none8 === 8 && current.none9===0;
}
.8puzzle.prototype.successors = function(current){
	var successors = [];

if (current.none1==0){
		
		var succesor1= {
			state :{none1:current.none2, none2:0,none3:current.none3,none4:current.none4,none5:current.none5,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Left move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2= {
			state :{none1:current.none4, none4:0,none2:current.none2,none3:current.none3,none5:current.none5,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'none',
			cost:1
		}
		successors.push(succesor2);
}
if (current.none2==0){
		
		var succesor1 = {
			state :{none2:current.none1, none1:0, none3:current.none3,none4:current.none4,none5:current.none5,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Left move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none2:current.none3, none3:0, none1:current.none1,none4:current.none4,none5:current.none5,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Rigth move',
			cost:1
		}
		successors.push(succesor2);
	
succesor3 = {
			state :{none2:current.none5, none5:0, none3:current.none3,none4:current.none4,none1:current.none1,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Down move',
			cost:1
		}
		successors.push(succesor3);
	}

if (current.none3==0){
		
		var succesor1= {
			state :{none3:current.none2, none2:0, none1:current.none1,none4:current.none4,none5:current.none5,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Left move',
			cost:1
		}
		successors.push(succesor1);
	
	
succesor2 = {
			state :{none3:current.none6, none6:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Down move',
			cost:1
		}
			successors.push(succesor2);
	}

if (current.none4==0){
		
		var succesor1 = {
			state :{none4:current.none1, none1:0, none2:current.none2,none3:current.none3,none5:current.none5,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Up move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none4:current.none5, none5:0, none1:current.none1,none2:current.none2,none3:current.none3,none2:current.none2,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Rigth move',
			cost:1
		}
			successors.push(succesor2);
	
succesor3= {
			state :{none4:current.none7, none7:0, none1:current.none1,none2:current.none2,none5:current.none5,none6:current.none6,none3:current.none3,none8:current.none8,none9:current.none9},
			action:'Down move',
			cost:1
		}
			successors.push(succesor3);
	}

if (current.none5==0){
		
		var succesor1 = {
			state :{none5:current.none2, none2:0, none1:current.none1,none4:current.none4,none3:current.none3,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Up move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none5:current.none4, none4:0, none1:current.none1,none3:current.none3,none2:current.none2,none6:current.none6,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Left move',
			cost:1
		}
			successors.push(succesor2);
	
succesor3 = {
			state :{none5:current.none6, none6:0, none1:current.none1,none4:current.none4,none3:current.none3,none2:current.none2,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Rigth move',
			cost:1
		}
			successors.push(succesor3);
	
succesor4 = {
			state :{none5:current.none8, none8:0, none1:current.none1,none4:current.none4,none3:current.none3,none2:current.none2,none7:current.none7,none6:current.none6,none9:current.none9},
			action:'Down move',
			cost:1
		}
			successors.push(succesor4);
	}

if (current.none6==0){
		
		var succesor1 = {
			state :{none6:current.none3, none3:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Up move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none6:current.none5, none5:0, none1:current.none1,none4:current.none4,none3:current.none3,none2:current.none2,none7:current.none7,none8:current.none8,none9:current.none9},
			action:'Left move',
			cost:1
		}
			successors.push(succesor2);
	
succesor3 = {
			state :{none6:current.none9, none9:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none7:current.none7,none8:current.none8,none3:current.none3},
			action:'Down move',
			cost:1
		}
			successors.push(succesor3);
	}

if (current.none7==0){
		
		var succesor1 = {
			state :{none7:current.none4, none4:0, none1:current.none1,none3:current.none3,none5:current.none5,none2:current.none2,none6:current.none6,none8:current.none8,none9:current.none9},
			action:'Up move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none7:current.none8, none8:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none3:current.none3,none6:current.none6,none9:current.none9},
			action:'Rigth move',
			cost:1
		}
			successors.push(succesor2);
	}


if (current.none8==0){
		
		var succesor1 = {
			state :{none8:current.none5, none5:0, none1:current.none1,none4:current.none4,none3:current.none3,none2:current.none2,none7:current.none7,none6:current.none6,none9:current.none9},
			action:'Up move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none8:current.none7, none7:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none3:current.none3,none6:current.none6,none9:current.none9},
			action:'Left move',
			cost:1
		}
			successors.push(succesor2);
	
succesor3 = {
			state :{none8:current.none9, none9:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none7:current.none7,none3:current.none3,none6:current.none6},
			action:'Rigth move',
			cost:1
		}
			successors.push(succesor3);
	}

if (current.none9==0){
		
		var succesor1 = {
			state :{none9:current.none6, none6:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none7:current.none7,none8:current.none8,none3:current.none3},
			action:'Up move',
			cost:1
		}
		successors.push(succesor1);
	
succesor2 = {
			state :{none9:current.none8, none8:0, none1:current.none1,none4:current.none4,none5:current.none5,none2:current.none2,none7:current.none7,none3:current.none3,none6:current.none6},
			action:'Left move',
			cost:1
		}
			successors.push(succesor2);
	
}

	return successors;
	
};

module.exports =.8puzzle;