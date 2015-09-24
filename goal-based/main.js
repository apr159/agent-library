var Search = require("./search");
var Problem = require("./Juego8");
var Strategy = require("./breath");


var strategy = new Strategy();
//var problem = new Problem({espacio1:1,espacio2:2,espacio3:3,espacio4:4,espacio5:0,espacio6:5,espacio7:7,espacio8:8,espacio9:6});
var problem = new Problem({espacio1:1,espacio2:2,espacio3:3,espacio4:4,espacio5:5,espacio6:6,espacio7:0,espacio8:7,espacio9:8});

var search = new Search(problem,strategy);

search.run();
