
var Astar = function(){
	
}

Astar.prototype.add = function(queue,node){
	queue.push(node);
	var posición;
	var nodeaux;
	var min;

	for(var q=0; q<queue.length-1; q++){

		min=queue[q].h+queue[q].cost;
		posicion=q;

		for(var p=q; p<queue.length; p++){

			if((queue[p].cost+queue[p].h)<min){

				min=queue[p].cost+queue[p].h;
				posicion=p;

			}

		}
		
		nodeaux=queue[posicion];
		queue[posicion]=queue[q];
		queue[q]=nodeaux;

	}

	
}

module.exports = Astar;