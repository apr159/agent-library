
var Search = require("./search");
var Puzzle = require("./puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Puzzle({scenary:[[1,4,7],[2,5,0],[3,6,8]],blank:[1,2]});
/*
|1   3|
|4 2 6|
|7 5 8|
*/


var search = new Search(problem,strategy);

search.run();
