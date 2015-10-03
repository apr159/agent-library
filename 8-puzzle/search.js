
var Search = function(problem, strategy){
	this.problem = problem;
	this.strategy = strategy;
	this.queue = [];
	this.repeated = [];
};

Search.prototype.printPath = function(node){
	var path = [];
	var n = node;
	while (n!=undefined){
		path.unshift({action:n.action,state:n.state});

		n = n.parent;
	}
	return path;
};

Search.prototype.run = function(){



	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0
	}
	this.strategy.add2(this.queue, initialNode);


	 while (this.queue.length>0){
//asegurarse que el primero sea el mas chico;
		var node = this.queue.shift();
		this.strategy.add2(this.repeated,node);
	
		if (this.problem.isGoal(node.state)){
			var patron = this.printPath(node);

			for (var i = 0; i < patron.length; i++) {
				console.log("paso "+i+":  "+patron[i].action);
				console.log(patron[i].state);
			};
			return "Success";
		}else{
			var succesors = this.problem.successors(node.state,node.depth);

			for (var i=0; i<succesors.length; i++){
				//por cada nodo buscar si succesors[i] esta en this.queue o this.repeated
				this.strategy.algorithm(this.strategy,this.queue,this.repeated,succesors[i],node);
			}

		}
	}

};

module.exports = Search;