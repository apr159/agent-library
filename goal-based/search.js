
var Search = function(problem, strategy){
	this.problem = problem;
	this.strategy = strategy;
	this.queue = [];
	this.visited = [];
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
	
	var getNode = function(successor,parent){
		return {
			state: successor.state,	
			action: successor.action,
			cost: parent.cost + successor.cost,
			parent: parent,
			depth: parent.depth+1
		}
	};

	var initialNode={
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0
	}
	this.strategy.add(this.queue,initialNode);
	var g = 0; //nivel en que se encuentran los nodos hijos

	while (this.queue.length>0){
		var node = this.queue.shift();
		//console.log('length:',this.queue.length);
		//this.queue.length = 0;
		//console.log('--------------------');
		//console.log(node);
		//console.log('--------------------');
		var visited = this.strategy.visited(this.visited,node);

		if(visited==0){
		if (this.problem.isGoal(node.state)){
			console.log(this.printPath(node))
			return "Success";
		}else{
			var successors = this.problem.successors(node.state);
			g++;
			for (var i=0;i<successors.length;i++){
				//console.log(this.printPath(successors[i]));
				var h = this.problem.h(successors[i].state);
				//successors[i].cost = g + this.problem.h(successors[i].state);
				//console.log('h:',h);
				successors[i].cost = g + h;
				//console.log('cost:',successors[i].cost);
				//console.log('pause');
				// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
				// console.log(getNode(successors[i],node));
				// console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
				this.strategy.add(this.queue,getNode(successors[i],node));
			}
		}
		this.visited.push(node);
		}
	}
};

module.exports = Search;