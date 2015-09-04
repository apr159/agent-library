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

sim.execute();var VacuumEnv = function(state){
	this.state = {
		agentPosition:1,
		cleaned:[
			false,
			false
		],
		finished:false
	};
	this.actions = ["Left","Right","Aspire","Rest"]
}

VacuumEnv.prototype.act = function(action){
	if (action=="Right")
		this.state.agentPosition = 2;
	else if (action=="Left")
		this.state.agentPosition = 1;
	else if (action=="Aspire")
		this.state.cleaned[this.state.agentPosition-1] = true;
	var thiss = this
	function isTrue(element) {
  		return element;
	}

	this.state.finished = this.state.cleaned.every(isTrue);

	return this.state;
}

VacuumEnv.prototype.getInitialState = function(action){
	return this.state;
}

VacuumEnv.prototype.getActions = function(){
	return this.actions;
}

module.exports = VacuumEnv;