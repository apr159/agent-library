Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   

var comparar = function(current, goal){
	error = 0;

	for (var i=0,l=current.length;i<l;i++) {
		if(current[i] != goal[i])
			error++;
	}
	return error;
}

var Puzzle = function(initial) {
	this.initial = initial;
}

Puzzle.prototype.isGoal = function(current) {
	return current.equals([[1,4,7],[2,5,8],[3,6,0]]);
}

var.prototype.successors = function(current) {
	var successors = [];

	if(current.blank[1] != 0){
		temp = current[current.blank[0]][current.blank[1]-1];
		current[current.blank[0]][current.blank[1]-1] = current[current.blank[0]][current.blank[1]];
		current[current.blank[0]][current.blank[1]] = temp
		var successor = {
			state: current,
			action: arriba,
			cost: comparar(current,[[1,4,7],[2,5,8],[3,6,0]])
		}
		succesors.push(successor);
	}

	if(current.blank[1] != 2){
		temp = current[current.blank[0]][current.blank[1]+1];
		current[current.blank[0]][current.blank[1]+1] = current[current.blank[0]][current.blank[1]];
		current[current.blank[0]][current.blank[1]] = temp
		var successor = {
			state: current,
			action: arriba,
			cost: comparar(current,[[1,4,7],[2,5,8],[3,6,0]])
		}
		succesors.push(successor);
	}

	if(current.blank[0] != 0){
		temp = current[current.blank[0]-1][current.blank[1]];
		current[current.blank[0]-1][current.blank[1]] = current[current.blank[0]][current.blank[1]];
		current[current.blank[0]][current.blank[1]] = temp
		var successor = {
			state: current,
			action: arriba,
			cost: comparar(current,[[1,4,7],[2,5,8],[3,6,0]])
		}
		succesors.push(successor);
	}

	if(current.blank[0] != 2){
		temp = current[current.blank[0]+1][current.blank[1]];
		current[current.blank[0]+1][current.blank[1]] = current[current.blank[0]][current.blank[1]];
		current[current.blank[0]][current.blank[1]] = temp
		var successor = {
			state: current,
			action: arriba,
			cost: comparar(current,[[1,4,7],[2,5,8],[3,6,0]])
		}
		succesors.push(successor);
	}	

	return succesors;
}

module.exports = Puzzle;