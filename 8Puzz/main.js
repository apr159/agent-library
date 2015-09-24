var Search = require("./search");
var Problem = require("./puzzle");
var Strategy = require("./breath");

var strategy = new Strategy();
var problem = new Problem({position00:1,position01:2,position02:3,
						   position10:4,position11:8,position12:5,
						   position20:7,position21:6,position22:0});

var search = new Search(problem,strategy);

search.run();