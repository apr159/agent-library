var a_star = function(){

}

a_star.prototype.add = function(queue,node){
	queue.push(node);
 
 	/*
	Se calcula el costo + heuristica y se devuelve usando la 
	siguiente variable
 	*/
	var fn;
	queue.sort(function(x,y){
		fn = (x.cost + x.h)-(y.cost + y.h);
		return fn;
	})
	
}

module.exports = a_star;


