//
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
		path.unshift({action:n.action, state:n.state, cost:n.cost, h:n.h});
		n = n.parent;
	}
	//console.log("\n Pasos = ", path.length, "\n\n");
	return path;
};

Search.prototype.run = function(){
	
	var getNode = function(succesor,parent, h){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			h:h,
			parent: parent,
			depth: parent.depth+1
		}
	};

	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0,
		h: this.problem.h(this.problem.initial)
	}
	this.strategy.add(this.queue, initialNode);
	console.log("\n Estado Inicial = ", initialNode.state );

	//
	var ctrl=false;

	while (this.queue.length>0){
		
		//se extrae un elemento al principio de la cola
		var node = this.queue.shift();
		ctrl=false;

		
		//Verifica si el estado actual es el objetivo
		if (this.problem.isGoal(node.state)){
			console.log(this.printPath(node))
			return "Success";
		}else{
			this.repeated.push(node);
			var succesors = this.problem.successors(node.state);
			
			for (var i=0;i<succesors.length;i++){
				ctrl=false;

				for(var k=0; k<this.repeated.length; k++){

					if(JSON.stringify(succesors[i].state)==JSON.stringify(this.repeated[k].state))
					ctrl=true;
				}

				if(ctrl==false){
					this.strategy.add(this.queue,getNode(succesors[i],node));	
				}

				

			}


		}
	}

};

module.exports = Search;