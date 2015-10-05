var Search = require("./search");
var Problem = require("./puzzle");
var Strategy = require("./a-squareOut");//A ESTRELLA CON heuristica de cuadros desordenados

var strategy = new Strategy();
var problem = new Problem({n1:11, n2:22, n3:13, n4:21, n5:32, n6:23, n7:31, n8:33, n0:12});
var search = new Search(problem,strategy);

search.run();