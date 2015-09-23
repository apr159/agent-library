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

console.log(equals([[1,4,7],[2,5,8],[3,6,0]], [[1,4,7],[2,5,8],[3,6,0]]));
console.log(comparar([[1,4,7],[2,5,8],[3,6,0]], [[1,4,7],[2,5,8],[3,6,0]]));