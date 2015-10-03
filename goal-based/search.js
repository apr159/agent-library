
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
	var getNode = function(succesor,parent){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			parent: parent,
			depth: parent.depth+1
		}
	};
	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0
	}
	this.strategy.add(this.queue, initialNode);

	while (this.queue.length>0){
		var node = this.queue.shift();
		
		
		if (this.problem.isGoal(node.state)){
			console.log(this.printPath(node))
			return "Success";
		}else{
			var costoMenor=999999;
			var cont=0;
			var succesors = this.problem.successors(node.state);
			for (var i=0;i<succesors.length;i++){
				if(succesors.cost<=costoMenor){
					costoMenor=succesors.cost;
					cont=i;
				}
				//this.strategy.add(this.queue,getNode(succesors[i],node));
			}

			this.strategy.add(this.queue,getNode(succesors[cont],node));
		}
	}

};

module.exports = Search;