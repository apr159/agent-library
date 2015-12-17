var Search = require("./search");
var Problem = require("./8puzzle");
var Strategy = require("./breath");


var strategy = new Strategy();
var problem = new Problem({piece1:1,piece2:2,piece3:3,piece4:4,piece5:5,piece6:6,piece7:7,piece8:0,piece9:8});


var search = new Search(problem,strategy);

search.run();

/*

Hasta ahora solo se ha implementado el problema del 8-puzzle para ser tratado con las busquedas en anchura y profundidad, ya que
costo uniforme aun no pudimos descargarlo pues tuvimos problemas con el merge

Escenarios que puede probar:
{piece1:1,piece2:2,piece3:3,piece4:4,piece5:5,piece6:6,piece7:0,piece8:7,piece9:8}
{piece1:1,piece2:2,piece3:3,piece4:4,piece5:0,piece6:6,piece7:7,piece8:5,piece9:8}
{piece1:0,piece2:1,piece3:3,piece4:4,piece5:2,piece6:6,piece7:7,piece8:5,piece9:8}

*/