
var DLS = function(limit){
	this.limit = limit;
}

DLS.prototype.add = function(queue,node){
	if (node.depth <= this.limit)
		queue.unshift(node);
}

module.exports = DLS;