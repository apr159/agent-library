var Search = require("./search");
var Problem = require("./8-puzzle");
var Strategy = require("./a_star");


var strategy = new Strategy();
var problem = new Problem({ slot1: "Pieza0", slot2: "Pieza1", slot3: "Pieza2",
							slot4: "Pieza5", slot5: "Pieza4", slot6: "Pieza3",
							slot7: "Pieza6", slot8: "Pieza8", slot9: "Pieza7"});


var search = new Search(problem,strategy);

search.run();
