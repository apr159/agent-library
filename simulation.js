

var Simulation = function(agent,env,config){
	this.config = config;
	this.agent = agent;
	this.env = env;
}

Simulation.prototype.execute = function(){

	var simThis = this;
	var ticks = this.config.maxSteps || 1000;
	var delay = this.config.delay || 1000;
	var state = this.env.getInitialState();
	var action;


	function repeat(callback, interval, repetitions, immediate) {
	    function repeater(repetitions) {
	        if (repetitions >= 0) {
	            callback.call(this);

	            setTimeout(function () {
	                repeater(--repetitions)
	            }, interval)
	            if (state.finished){
	            	repetitions = 0;
	            	console.log(state)
	            }
	        }
	    }
	    repetitions = repetitions || 0;
	    interval = interval || 1000;
	    if (immediate) {
	        repeater(--repetitions)
	    } else {
	        setTimeout(function () {
	            repeater(--repetitions)
	        }, interval)
	    }
	}

	function iteration(){
		console.log(state);
		action = simThis.agent.act(state);
		console.log("Action: " + action)
		state = simThis.env.act(action);
			
	}

	repeat(iteration,delay,ticks,true);
}
module.exports = Simulation