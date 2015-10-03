var Search = require("./search");
var Problem = require("./puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({cuadro:[[2,5,3],[1,0,6],[4,7,8]]});

var search = new Search(problem,strategy);

search.run();
