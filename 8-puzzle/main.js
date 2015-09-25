 var Search = require("./search");
 var Problem = require("./puzzle");
 var Strategy = require("./breath");

var obj = {
		state: {
			matriz:[[1,2,3],[4,5,6],[7,0,8]]
			},
			action: '',
			cost: 0,
			parent: undefined,
			depth: 0
	}

var strategy = new Strategy();
var problem = new Problem({
			matriz:[[1,2,3],[4,5,6],[7,0,8]]
			});
// var problem = new Problem(obj.state);


var search = new Search(problem,strategy);
console.log("entre");
search.run();
console.log("sali");
