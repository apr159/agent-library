//Variables para resolver el problema
var Problem = require("./8puzzle"); 

//Pn es la casilla dentro del tablero con su respectivo valor
//si Pn=0 esa casilla es la vacia
//NO REPETIR VALORES!!!!!
var P1=8;
var P2=2;
var P3=5;
var P4=6;
var P5=0;
var P6=1;
var P7=3;
var P8=4;
var P9=7;

var problem = new Problem({piece1:P1,piece2:P2,piece3:P3,piece4:P4,piece5:P5,piece6:P6,piece7:P7,piece8:P8,piece9:P9});

//estrategia de solucion
var Search = require("./search"); //busqueda de la solucion (problema, estrategia)

//aplicando las estrategias de solucion
var Strategy1 = require("./breath"); 
var Strategy2 = require("./depth"); 

//implementacion de las estrategias
//cambiar strategy por la que se desea usar
var search = new Search(problem,strategy1);

search.run();