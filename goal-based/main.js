var Search = require("./search");
var Problem = require("./water-jug");
var Strategy = require("./a_star");


var strategy = new Strategy();
var problem = new Problem({glass1: 4, glass2: 3});


var search = new Search(problem,strategy);

search.run();
