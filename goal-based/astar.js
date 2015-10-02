var astar = function(){
}

astar.prototype.add = function(queue, node){
	queue.push(node);
	//ordena la cola de menor a mayor
	queue.sort(function(a,b){
		if(a.cost < b.cost){
			return -1;
		}
		if(a.cost > b.cost){
			return 1;
		}
		return 0;
	});
}

astar.prototype.visited = function(queue, node){ //compara si algún nodo ya ha sido visitado
	if(queue.length!=0){
		for(var i=0;i<queue.length;i++){
			if(queue[i]==node){
				return 1;
			}
		}
	}
	return 0;
}

module.exports = astar;
