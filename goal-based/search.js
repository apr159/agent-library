
var Search = function(problem, strategy){
	this.problem = problem;
	this.strategy = strategy;
	this.queue = [];
	this.repeated = [];//usarlo
};


Search.prototype.printPath = function(node){
	var path = [];
	var n = node;
	while (n!=undefined){
		path.unshift({action:n.action,state:n.state});//meterlo enf
		n = n.parent;
	}
	return path;
};
Search.prototype.getRepeated = function(node){
	for(var i=0;i<this.repeated.length;i++){
		if(node.state == this.repeated[i].state)
			return true;
	}
	return false;
}//crear aqui algo para determinar si se repite el estado

Search.prototype.run = function(){
	
	var getNode = function(succesor,parent){//crear nodo
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			heuristic: parent.heuristic + succesor.heuristic,
			parent: parent,
			depth: parent.depth+1
		}
	};

	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		heuristic: 0,//no sure
		parent: undefined,
		depth: 0
	}
	this.strategy.add(this.queue, initialNode);//al inicio

	while (this.queue.length>0){
		var node = this.queue.shift();
		
		
		if (this.problem.isGoal(node.state)){
			console.log(this.printPath(node))
			return "Success";
		}else{
			var succesors = this.problem.successors(node.state);//successor del prob
			for (var i=0;i<succesors.length;i++){
				this.strategy.add(this.queue,getNode(succesors[i],node));

			}


		}
	}

};

module.exports = Search;