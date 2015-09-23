var Search = require("./search");
var Problem = require("./8-Puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
//var problem = new Problem({glass1:4,glass2:3});
var problem = new Problem({celda1:1,celda2:2,celda3:3,celda4:4,celda5:5,celda6:6,celda7:0,celda8:7,celda9:8});


var search = new Search(problem,strategy);

search.run();
