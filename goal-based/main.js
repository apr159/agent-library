var Search = require("./search");
var Problem = require("./8puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({none1:2,none2:3,none3:4,none4:5,none5:6,none6:7,none7:8,none8:9,none9:0});

var search = new Search(problem,strategy);

search.run();