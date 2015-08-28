var VacuumAgent = function(actions){
	this.actions = actions;

}

VacuumAgent.prototype.act = function(sensors){
	return this.actions[Math.floor(Math.random()*this.actions.length)];
}

module.exports = VacuumAgent;