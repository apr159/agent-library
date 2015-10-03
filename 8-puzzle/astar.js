
var Astar = function(){
	
}
var getNode = function(succesor,parent){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			parent: parent,
			depth: parent.depth+1
		}
};
//mandarle el NODE.state
var compara = function(nodoComp1,nodoComp2) {
	var resultado = false;
	var iguales = true;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if( nodoComp1.matriz[i][j] != nodoComp2.matriz[i][j]){
					iguales = false;
				}
			};
		};
	
	if (iguales) {
		resultado = true;
	};

	return resultado;
};


Astar.prototype.add = function(queue,node,index){

	queue.splice(index,0,node);

}
Astar.prototype.add2 = function(queue,node){
	queue.push(node);
}
Astar.prototype.algorithm = function(strategy,thisQ,thisR,sucesor,node){
	//por cada nodo buscar si succesors[i] esta en this.queue o this.repeated
			var estaQueue = false;
			var estaRepeated = false;
			var indiceQueue;						
			var indiceAbierto;
			var indiceCerrado;
			for(var j = 0; j< thisQ.length; j++){									
			
				if(compara(thisQ[j].state,sucesor.state)){
					estaQueue = true;
					indiceAbierto = j;
				}
			}
			
			for(var k = 0; k< thisR.length; k++){									
				if(compara(thisR[k].state,sucesor.state)){			
					estaQueue = true;
					var indiceCerrado = k;
				}
			}			

			if (estaRepeated==false) {
				if (estaQueue==false) {
					if (estaQueue) {
						//verificar si el nodo que esta en this.queue fue alcanzado por sucesor
						//con una ruta mas corta
						if (sucesor.depth < thisQ[indiceAbierto]) {
							thisQ[indiceAbierto].depth = sucesor.depth;
							thisQ[indiceAbierto].cost = sucesor.cost;
							thisQ[indiceAbierto].parent = sucesor.parent;
							thisQ[indiceAbierto].action = sucesor.action;

						};

					}else{
				//Determinar posicion de sucesor y guardarlo en thisQ de menor a mayor f
					 var numeros = [];
					for (var m =0; m < thisQ.length; m++) {
						numeros.push(thisQ[m].cost);
				
					};
					numeros.push(sucesor.cost);
					var ordenados = (JSON.parse(JSON.stringify(numeros))); 
					ordenados.sort((function(a, b){return a-b}));
					var nuevoIndex = ordenados.indexOf(sucesor.cost);
					strategy.add(thisQ,getNode(sucesor,node),nuevoIndex);
					}
				};
			}


}




module.exports = Astar;