var A_STAR = function(){
	
}

A_STAR.prototype.add = function(queue,node){
	queue.push(node);
	
	//console.log("--DESORDENADOS--- 'n", queue, "\n-------\n");
	

	/**
	Se ordena el arreglo segun costo + heuristica para que al hacer shift
	al queue se escoja siempre el elemento de menos valor f(n) = g(n) + h(n).

	**/
	
	queue.sort(function(a, b){
	return (a.cost + a.h)-(b.cost + b.h)
	})	

	//console.log("___ORDENADOS___ 'n", queue, "\n________\n");

}



module.exports = A_STAR;