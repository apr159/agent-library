var ASD = function(limit){
	this.limit = limit;
}

ASD.prototype.add = function(queue,node){
 var c=0;
if (node.state.n1==11){c++; limit=c;};
if (node.state.n2==12){c++; limit=c;};
if (node.state.n3==13){c++; limit=c;};
if (node.state.n4==21){c++; limit=c;};
if (node.state.n5==22){c++; limit=c;};
if (node.state.n6==23){c++; limit=c;};
if (node.state.n7==31){c++; limit=c;};
if (node.state.n8==32){c++; limit=c;};
if (node.state.n0==33){c++; limit=c;};

	if (node.depth <= limit)
		queue.unshift(node);
}

module.exports = ASD;