var Search = function(problem, strategy, boxes, end_point){
	this.problem = problem;
	this.boxes = boxes;
	this.end_point = end_point;
	this.strategy = strategy;
	this.queue = []; //Cola vacia
	this.repeated = []; //Cola vacia de repetidos
};

Search.prototype.printPath = function(node){
	var path = [];
	var n = node;

	while(n!=undefined){
		path.unshift({
			action: n.action
		});
		n = n.parent;
	}
	return path;
};

Search.prototype.run = function(){
	
	var getNode = function(start, succesor, parent){
		return{
			start_position: start,
			position: succesor.position,
			action: succesor.action,
			g: parent.g + succesor.g,
			h: succesor.h,
			f: parent.g + succesor.g + succesor.h,
			parent: parent
		}
	};

	for(var n=0; n<this.boxes.length; n++){
		var initialNode = {
			start_position:{
				a: this.boxes[n][0],
				b: this.boxes[n][1]
			},
			position:{
				i: this.boxes[n][0],
				j: this.boxes[n][1]
			},
			action:'Start',
			g: 0,
			h: 0,
			f: 0,
			parent: undefined
		}
		this.strategy.add(this.queue, initialNode);
	}

	while (this.queue.length > 0){
		var node = this.queue.shift(); //Shift: devuelve el primer elemento de la cola y lo elimina.
		
		if(!this.strategy.visited(this.repeated, node.position)){
			if(this.problem.isGoal(node.position, this.end_point)){
				console.log(this.printPath(node));
				return node.start_position;
				//return "Success";
			}else{
				var succesors = this.problem.successors(node.position, this.end_point, this.problem.initial);
				for(var i=0; i<succesors.length; i++){
					this.strategy.add(this.queue, getNode(node.start_position, succesors[i], node));
				}
				this.strategy.add(this.repeated, node.position);
			}
		}
	}
};

module.exports = Search;