var Search = require("./search");
var Problem = require("./8puzzle");
var Strategy = require("./breath");
//var Strategy = require("./depth-limited");

var strategy = new Strategy();
var problem = new Problem({pos00:1,pos01:2,pos02:3,
						   pos10:4,pos11:8,pos12:5,
						   pos20:7,pos21:6,pos22:0});

var search = new Search(problem,strategy);

search.run();