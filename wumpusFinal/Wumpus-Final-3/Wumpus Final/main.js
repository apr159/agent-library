var Search = require("./search");
var Env = require("./laberinto.js");
var Player = require("./cazador.js");
var Strategy = require("./depth-limited.js");
var Game = require("./juego.js");

var m = 2; 
var n = 2;

var strategy = new Strategy(3);
var laberinto2 = new Env(m,n);
laberinto2.printer();
laberinto2.generarmundo(m,n,1,0,0);
laberinto2.AnalizarSensaciones(m,n);

var player = new Player(laberinto1,m,n);
var game = new Game({place:laberinto1, play:player, estado:"vivo", M:m, N:n});

var search = new Search(game,strategy);

search.run;
