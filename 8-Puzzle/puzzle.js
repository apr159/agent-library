/*Array.prototype.equals = function (array) {
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
}   */

var equals = function (current, array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (current.length != array.length)
        return false;

    for (var i = 0, l=current.length; i < l; i++) {
    	for (var j=0,m=3;j<m;j++) {
    		// Check if we have nested arrays
	        if (current[i][j] instanceof Array && array[i][j] instanceof Array) {
	            // recurse into the nested arrays
	            if (!(current[i][j] == array[i][j]))
	                return false;       
	        }           
	        else if (current[i][j] != array[i][j]) { 
	            // Warning - two different object instances will never be equal: {x:20} != {x:20}
	            return false;   
	        }  
    	}         
    }       
    return true;
}

var comparar = function(current, goal){
	var error = 0;

	for (var i=0,l=current.length;i<l;i++) {
		for (var j=0,m=3;j<m;j++){
			if(current[i][j] != goal[i][j])
				error++;
		}
	}
	return error;
}

var Puzzle = function(initial) {
	this.initial = initial;
}

Puzzle.prototype.isGoal = function(current) {
	return equals(current, [[1,4,7],[2,5,8],[3,6,0]]);
}

Puzzle.prototype.successors = function(current) {
	//Lista de los posibles movimientos
	var successors = [];
	console.log("Current: ");
	console.log(current);

	//Mover hacia arriba
	if(current.blank[1] != 0){
		temp = current.scenary[current.blank[0]][current.blank[1]-1];
		current.scenary[current.blank[0]][current.blank[1]-1] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0],current.blank[1]-1];
		console.log("********************************Arriba****************************************");
		console.log(current);
		var successor = {
			state: current,
			action: "Arriba",
			cost: comparar(current.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		console.log("********************************Arriba2****************************************");
		console.log(successor.state);
		successors.push(successor);
		temp = current.scenary[current.blank[0]][current.blank[1]+1];
		current.scenary[current.blank[0]][current.blank[1]+1] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0],current.blank[1]+1];
		console.log("********************************Arriba3****************************************");
		console.log(successor.state);
	}

	//Mover hacia abajo
	if(current.blank[1] != 2){
		temp = current.scenary[current.blank[0]][current.blank[1]+1];
		current.scenary[current.blank[0]][current.blank[1]+1] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0],current.blank[1]+1];
		var successor = {
			state: current,
			action: "Abajo",
			cost: comparar(current.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
		temp = current.scenary[current.blank[0]][current.blank[1]-1];
		current.scenary[current.blank[0]][current.blank[1]-1] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0],current.blank[1]-1];
	}

	//Mover hacia la izquierda
	if(current.blank[0] != 0){
		temp = current.scenary[current.blank[0]-1][current.blank[1]];
		current.scenary[current.blank[0]-1][current.blank[1]] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0]-1,current.blank[1]];
		var successor = {
			state: current,
			action: "Izquierda",
			cost: comparar(current.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
		temp = current.scenary[current.blank[0]+1][current.blank[1]];
		current.scenary[current.blank[0]+1][current.blank[1]] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0]+1,current.blank[1]];
	}

	//Mover hacia la derecha
	if(current.blank[0] != 2){
		temp = current.scenary[current.blank[0]+1][current.blank[1]];
		current.scenary[current.blank[0]+1][current.blank[1]] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0]+1,current.blank[1]];
		var successor = {
			state: current,
			action: "Derecha",
			cost: comparar(current.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
		temp = current.scenary[current.blank[0]-1][current.blank[1]];
		current.scenary[current.blank[0]-1][current.blank[1]] = current.scenary[current.blank[0]][current.blank[1]];
		current.scenary[current.blank[0]][current.blank[1]] = temp
		current.blank = [current.blank[0]-1,current.blank[1]];
	}	
	console.log("\nSuccessors: ");
	for(var i=0, l=successors.length;i<l;i++){
		console.log(successors[i]);
		console.log(successors[i].state);
	}
	console.log('******************************************************************');

	return successors;
}

module.exports = Puzzle;