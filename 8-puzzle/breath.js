
var BFS = function(){
	
}

BFS.prototype.add = function(queue,node,index){
	// queue.push(node);
	// console.log("NODO EN ADDx",node);
	// console.log("NODO EN index",index);
	// console.log(node.state.matriz);
	// console.log(queue.length);
	queue.splice(index,0,node);
		// console.log(queue.length);

}

module.exports = BFS;