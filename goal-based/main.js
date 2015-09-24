var Search = require("./search");
var Problem = require("./8puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({espacio1:2,espacio2:3,espacio3:4,espacio4:5,espacio5:6,espacio6:7,espacio7:8,espacio8:9,espacio9:0});

var search = new Search(problem,strategy);

search.run();