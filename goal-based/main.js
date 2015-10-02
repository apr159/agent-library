var Search = require("./search");
var Problem = require("./8puzzle");
var Strategy = require("./a_star");


var strategy = new Strategy();
var problem = new Problem({
							slot_1 : 4,
							slot_2 : -1, 
							slot_3 : 7,
							slot_4 : 8,
							slot_5 : 1,
							slot_6 : 5,
							slot_7 : 6,
							slot_8 : 3,
							slot_9 : 2,});


var search = new Search(problem,strategy);

search.run();