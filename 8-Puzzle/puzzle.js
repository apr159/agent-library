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
	var test = current;
	console.log("Current: ");
	console.log(current);

	//Mover hacia arriba
	if(test.blank[1] != 0){
		temp = test.scenary[test.blank[0]][test.blank[1]-1];
		test.scenary[test.blank[0]][test.blank[1]-1] = test.scenary[test.blank[0]][test.blank[1]];
		test.scenary[test.blank[0]][test.blank[1]] = temp
		test.blank = [test.blank[0],test.blank[1]-1];
		var successor = {
			state: test,
			action: "Arriba",
			cost: comparar(test.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
		test = current;
	}

	//Mover hacia abajo
	if(test.blank[1] != 2){
		temp = test.scenary[test.blank[0]][test.blank[1]+1];
		test.scenary[test.blank[0]][test.blank[1]+1] = test.scenary[test.blank[0]][test.blank[1]];
		test.scenary[test.blank[0]][test.blank[1]] = temp
		test.blank = [test.blank[0],test.blank[1]+1];
		var successor = {
			state: test,
			action: "Abajo",
			cost: comparar(test.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
		test = current;
	}

	//Mover hacia la izquierda
	if(test.blank[0] != 0){
		temp = test.scenary[test.blank[0]-1][test.blank[1]];
		test.scenary[test.blank[0]-1][test.blank[1]] = test.scenary[test.blank[0]][test.blank[1]];
		test.scenary[test.blank[0]][test.blank[1]] = temp
		test.blank = [test.blank[0]-1,test.blank[1]];
		var successor = {
			state: test,
			action: "Izquierda",
			cost: comparar(test.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
		test = current;
	}

	//Mover hacia la derecha
	if(test.blank[0] != 2){
		temp = test.scenary[test.blank[0]+1][test.blank[1]];
		test.scenary[test.blank[0]+1][test.blank[1]] = test.scenary[test.blank[0]][test.blank[1]];
		test.scenary[test.blank[0]][test.blank[1]] = temp
		test.blank = [test.blank[0]+1,test.blank[1]];
		var successor = {
			state: test,
			action: "Derecha",
			cost: comparar(test.scenary,[[1,4,7],[2,5,8],[3,6,0]])
		}
		successors.push(successor);
	}	
	console.log("\nSuccessors: ");
	for(var i=0, l=successors.length;i<l;i++){
		console.log(successors[i].state);
	}
	console.log('******************************************************************');

	return successors;
}

module.exports = Puzzle;