var BFS = function(){
	
}
BFS.prototype.add = function (queue,node){
    queue.push(node);
	//sort
	queue.sort(function (a,b){
		if((a.cost +a.heuristic) > (b.cost + b.heuristic)){
			return 1;
		}
		if((a.cost +a.heuristic) < (b.cost + b.heuristic)){
			return 1;
		}
		return 0; //iguales
	});
}
module.exports = BFS;