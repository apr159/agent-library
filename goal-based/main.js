var Search = require("./search");
var Vacuum = require("./vacuum");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Vacuum({room1:'Dirty',room2:'Dirty',vacuum:'Left'});





var search = new Search(problem,strategy);

search.run();
