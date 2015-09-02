var UCS = function(){
	
}

UCS.prototype.add = function(queue,node){
	for (var i=0;i<queue.length;i++){
		if (queue[i].cost>node.cost){
			queue.splice(i,0,node);
			return;
		}
	}
	queue.unshift(node);
}

module.exports = UCS;