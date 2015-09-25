 var Search = require("./search");
 var Problem = require("./puzzle");
 var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({
			matriz:[[1,0,3],[5,2,6],[4,7,8]]
			});


var search = new Search(problem,strategy);
search.run();
