
var BFS = function(){
	
}

BFS.prototype.add = function(queue,node,index){

	queue.splice(index,0,node);

}

module.exports = BFS;