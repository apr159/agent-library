var Astar = function(){
}

Astar.prototype.add = function(queue, node){
	queue.push(node);
	//sorts the queue from least to greatest acording to f function
	if(queue.length > 1){
		queue.sort(function(a,b){
			if(a.f < b.f){
				return -1;
			}
			if(a.f > b.f){
				return 1;
			}
			return 0;
		});
	}
}

Astar.prototype.visited = function(queue, position){ //compares with visited nodes
	if(queue.length > 0){
		for(var n=0; n<queue.length; n++){
			if(queue[n].i == position.i && queue[n].j == position.j){
				return 1;
			}
		}
	}
	return 0;
}

module.exports = Astar;