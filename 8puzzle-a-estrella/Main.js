var Search = require("./search2");
var Problem = require("./8puzzle2");
var Strategy = require("./Astar");


var strategy = new Strategy();
var problem = new Problem({piece1:3,piece2:7,piece3:6,piece4:5,piece5:1,piece6:2,piece7:4,piece8:0,piece9:8});



var search = new Search(problem,strategy);

search.run();