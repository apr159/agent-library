
var Search = require("./search");
var Puzzle = require("./puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
//No olvidar cmabiar la posición del 0 en blank cuando se cambie el escenario
var problem = new Puzzle({scenary:[[4,7,0],[1,2,8],[3,5,6]],blank:[0,2]});
/*
|4 1 3|
|7 2 5|
|0 8 6|
*/


var search = new Search(problem,strategy);

search.run();
