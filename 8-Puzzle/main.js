
var Search = require("./search");
var Vacuum = require("./puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Vacuum({scenary:[[0,4,7],[1,2,8],[3,5,6]],blank:[0,0]});
/*
|  1 3|
|4 2 5|
|7 8 6|
*/


var search = new Search(problem,strategy);

search.run();
