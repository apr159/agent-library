
var Search = function(problem, strategy){
	this.problem = problem;
	this.strategy = strategy;
	this.queue = [];
	this.repeated = [];
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

Search.prototype.printPath = function(node){
	var path = [];
	var n = node;
	while (n!=undefined){
		path.unshift({action:n.action,state:n.state});

		n = n.parent;
	}
	return path;
};

Search.prototype.run = function(){

	var getNode = function(succesor,parent){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			parent: parent,
			depth: parent.depth+1
		}
	};

	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0
	}
	this.strategy.add(this.queue, initialNode);


	 while (this.queue.length>0){
//asegurarse que el primero sea el mas chico;
		var node = this.queue.shift();
		this.strategy.add(this.repeated,node);
	
		if (this.problem.isGoal(node.state)){
			var patron = this.printPath(node);

			for (var i = 0; i < patron.length; i++) {
				console.log(patron[i].action);
				console.log(patron[i].state);
			};
			return "Success";
		}else{
			var succesors = this.problem.successors(node.state,node.depth);

			for (var i=0; i<succesors.length; i++){
				//por cada nodo buscar si succesors[i] esta en this.queue o this.repeated
				var estaQueue = false;
				var estaRepeated = false;
				var indiceQueue;						
				var indiceAbierto;
				var indiceCerrado;
				for(var j = 0; j< this.queue.length; j++){									
					
					if(compara(this.queue[j].state,succesors[i].state)){
						estaQueue = true;
						indiceAbierto = j;
					}
				}
				
				for(var k = 0; k< this.repeated.length; k++){									
					if(compara(this.repeated[k].state,succesors[i].state)){
						
						estaQueue = true;
						var indiceCerrado = k;
					}
				}			

				if (estaRepeated==false) {
					if (estaQueue==false) {

						if (estaQueue) {
							//algo
						}else{
					//Determinar posicion de succesors[i] y guardarlo en this.queue de menor a mayor f
						 var numeros = [];
						for (var m =0; m < this.queue.length; m++) {
							numeros.push(this.queue[m].cost);
					
						};
						numeros.push(succesors[i].cost);
						var ordenados = (JSON.parse(JSON.stringify(numeros))); 
						ordenados.sort((function(a, b){return a-b}));
						var nuevoIndex = ordenados.indexOf(succesors[i].cost);
						this.strategy.add(this.queue,getNode(succesors[i],node),nuevoIndex);
						}
					};
				};

			}

		}
	}

};

module.exports = Search;