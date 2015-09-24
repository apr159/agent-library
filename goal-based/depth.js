
var DFS = function(){
	
}
//unshift introduce un elemento al inicio del arreglo
DFS.prototype.add = function(queue,node){
	queue.unshift(node);
}

module.exports = DFS;