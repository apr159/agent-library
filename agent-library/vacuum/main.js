//This is a minor modification of the program (just a comment)

var Simulation = require("./../simulation");
var VacuumAgent = require("./vacuumAgent");
var VacuumEnv = require("./vacuumEnv");



var env = new VacuumEnv();
var agent = new VacuumAgent(env.getActions());


var config = {
	delay : 500,
	ticks: 10
};

var sim = new Simulation(agent,env,config);

sim.execute();

