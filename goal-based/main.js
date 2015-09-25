var Search = require("./search");
var Problem = require("./puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({Cuadro11:2,Cuadro12:5,Cuadro13:3,Cuadro21:1,Cuadro22:0,Cuadro23:6,Cuadro31:4,Cuadro32:7,cuadro33:8});

var search = new Search(problem,strategy);

search.run();
