 var Search = require("./search");
 var Problem = require("./puzzle");
 var Strategy = require("./astar");


var strategy = new Strategy();
var problem = new Problem({
			 //200 pasos
			// matriz: [ [ 2, 6, 3 ], [ 7, 0, 4 ], [ 5, 8, 1 ] ]
			
			//268 pasos 
			//matriz:[[2,4,3],[5,7,6],[1,8,0]]
			//5 pasos
			matriz:[[1,0,3],[5,2,6],[4,7,8]]
			 //????
			//matriz: [ [ 1, 2, 3 ], [ 0, 4, 8 ], [ 7, 6, 5 ] ]
			});


var search = new Search(problem,strategy);
search.run();
