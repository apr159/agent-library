
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
					console.log("patron.length");

	var getNode = function(succesor,parent){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			parent: parent,
			depth: parent.depth+1
		}
			debugger;
	};

	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0
	}
	this.strategy.add(this.queue, initialNode);
	console.log("this.queue");
	console.log(this.queue[0].state.matriz);


	 // while (true){
	 while (this.queue.length>0){
//asegurarse que el primero sea el mas chico;
		var node = this.queue.shift();
		this.strategy.add(this.repeated,node);
		console.log("NOde awebo:");
		console.log(node.state.matriz);

		// console.log("Goal?: ",this.problem.isGoal(node.state));

		if (this.problem.isGoal(node.state)){
			var patron = this.printPath(node);

			for (var i = 0; i < patron.length; i++) {
				console.log(patron[i].matriz);
				console.log("patron.length");
				console.log(patron.length);
			};
			return "Success";
		}else{
			var succesors = this.problem.successors(node.state,node.depth);
			for (var i=0;i<succesors.length;i++){
				//por cada nodo buscar si succesors[i] esta en this.queue o this.repeated
				var estaQueue = false;
				var estaRepeated = false;
				var indiceQueue;
				// console.log("compara: ");
				// console.log(succesors[i]);
				var indiceAbierto;
				var indiceCerrado;
				for(var j = 0; j< this.queue.length; j++){
				console.log("compara: ");
				console.log(succesors[i]);
				console.log(this.queue[j]);

					if(compara(this.queue[j].state,succesors[i].state)){

				console.log("compara resultado :");
				console.log(compara(this.queue[j].state,succesors[i].state));
						estaQueue = true;
						indiceAbierto = j;
					}
				}
				for(var k = 0; k< this.repeated.length; k++){
				console.log("compara: ");
				console.log(succesors[i]);
				console.log(this.repeated[k]);

					if(compara(this.repeated[k].state,succesors[i].state)){

				console.log("compara resultado :");
				console.log(compara(this.repeated[k].state,succesors[i].state));
						estaQueue = true;
						var indiceCerrado = k;
					}
				}
				console.log(estaQueue,estaRepeated);

				if (estaRepeated==false) {
					// if (node.g < succesors[i].g || estaQueue==false) {
					if (estaQueue==false) {

						if (estaQueue) {
							// this.queue[indiceAbierto].parent = node.parent;
							// this.queue[indiceAbierto].depth = node.depth;
							// this.queue[indiceAbierto].f = node.f;
						}else{
					//Determinar posicion de succesors[i] y guardarlo en this.queue de menor a mayor f
						 var numeros = [];
						for (var i =0; i < this.queue.length; i++) {
							numeros.push(this.queue[i].f);
							console.log(numeros, this.queue[i].f);
						};
						numeros.push(node.f);
						console.log(numeros);

						var ordenados = (JSON.parse(JSON.stringify(numeros))); 
						ordenados.sort((function(a, b){return a-b}));

						// console.log(nodo[0]);
						console.log(ordenados);
						console.log(numeros);
						var nuevoIndex = ordenados.indexOf(node.f);
						console.log(ordenados.indexOf(node.f));
						console.log(numeros[0]);
							this.strategy.add(this.queue,getNode(succesors[i],node),nuevoIndex);
						}


					};
				};

				// //Ya se si esta en abierto
				// 	if(estaQueue == false){
				// 	//Determinar posicion de succesors[i] y guardarlo en this.queue de menor a mayor f
				// 		 var numeros = [];
				// 		for (var i =0; i < this.queue.length; i++) {
				// 			numeros.push(this.queue[i].f);
				// 			console.log(numeros, this.queue[i].f);
				// 		};
				// 		numeros.push(node.f);
				// 		console.log(numeros);

				// 		var ordenados = (JSON.parse(JSON.stringify(numeros))); 
				// 		ordenados.sort((function(a, b){return a-b}));

				// 		// console.log(nodo[0]);
				// 		console.log(ordenados);
				// 		console.log(numeros);
				// 		var nuevoIndex = ordenados.indexOf(node.f);
				// 		console.log(ordenados.indexOf(node.f));
				// 		console.log(numeros[0]);

				// 		this.strategy.add(this.queue,getNode(succesors[i],node),nuevoIndex);
				// 	}


				// if(){
				// //si no esta en this.queue
				// this.strategy.add(this.queue,getNode(succesors[i],node));
				// }

			}

		}
	}

};

module.exports = Search;