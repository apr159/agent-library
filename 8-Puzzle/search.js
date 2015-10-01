
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

	var nodes = [];
	var menor = 10000, it = 0;

	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0
	}
	this.strategy.add(this.queue, initialNode);
	

	while (this.queue.length>0){
		//console.log("Entre");
		var node = this.queue.pop();
		for(var i=0;i<3;i++){
			console.log("| " + node.state.scenary[0][i] + " | " + node.state.scenary[1][i] + " | " + node.state.scenary[2][i] + " |");
		}
		console.log("\n\n");
		/*console.log("Aqui: ")
		console.log(node.state);*/
		if (this.problem.isGoal(node.state.scenary)){
			console.log(this.printPath(node))
			return "Success";
		}else{
			var succesors = this.problem.successors(node.state);
			for (var i=0;i<succesors.length;i++){
				//this.strategy.add(this.queue,getNode(succesors[i],node));
				nodes.push(getNode(succesors[i],node));
				/*console.log('****************************************');
				console.log(nodes[i].action);
				console.log(nodes[i].cost);
				console.log('*****************************************');*/
			}

			menor = nodes[1].cost*1000;
			for(var i=0, l = nodes.length;i<l;i++){
				/*console.log('nodes: ' + nodes[i].cost);
				console.log('menor: ' + menor);*/
				if(nodes[i].cost<menor){
					menor = nodes[i].cost;
					it = i;
				}
				//console.log('itfor: ' + it);
			}
			//console.log('it: ' + it);
			this.strategy.add(this.queue,nodes[it]);
			node = nodes[it];
			it=0;
			//menor = 10000000;
			nodes = [];


		}
		/*console.log(this.queue);
		console.log("**************************************************************************************************************")*/
	}

};

module.exports = Search;