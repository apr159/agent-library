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

/*var Search = require("./search");
var Vacuum = require("./vacuum");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Vacuum({scenary:[[0,4,7],[1,2,8],[3,5,6]],});
/*
|  1 3|
|4 2 5|
|7 8 6|



var search = new Search(problem,strategy);

search.run();*/

console.log([[0,4,7],[1,2,8],[3,5,6]].equals([[0,4,7],[1,2,8],[3,5,5]]));
