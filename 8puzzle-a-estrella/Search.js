// Implementacion del algoritmo de busqueda en los nodos del arbol que se forma con los nodos y sus hijos
var Search = function(problem, strategy){
	this.problem = problem;
	this.strategy = strategy;
	this.queue = [];
	this.repeated = [];
};

//Funcion que imprime la relacioon de nodos que representan una solucion
Search.prototype.printPath = function(node){
	var path = [];
	var n = node;
	while (n!=undefined){
		path.unshift({action:n.action,state:n.state});
		n = n.parent;
	}
	return path;
};

//Funcion donde se realiza la busqueda del nodo solucion
Search.prototype.run = function(){
	
	//Funcion que crea un nodo nuevo a partir de su antecesor
	var getNode = function(succesor,parent,h){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			parent: parent,
			depth: parent.depth+1,
			h: h
		}
	};

	//Se crea un nodo que será el inicial, segun el estado que le introduzcamos en el main
	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		parent: undefined,
		depth: 0,
		h: this.problem.h(this.problem.initial)
	}

	//Se agrega el nodo a la cola
	this.strategy.add(this.queue, initialNode);

	//La variable bool sirve de control entre los ciclos y condiciones del algoritmo que no repite estados
	var bool = 0;

	//Inicia el algoritmo
	while (this.queue.length>0){

		//Se extrae un elemento de la cola
		var node = this.queue.shift();
		bool = 0;
		
		//Se verifica si ese estado es el estado objetivo
		if (this.problem.isGoal(node.state)){
			//De serlo asi se imprime la solucion
			console.log(this.printPath(node))
			return "Success";
		}else{
			//De lo contrario se procede a expandir el nodo y agregar el nodo al arreglo de repetidos
			this.repeated.push(node);
			var succesors = this.problem.successors(node.state);

			//Se inicia el algoritmo para verificar repetidos
			for (var i=0;i<succesors.length;i++){
				bool = 0;
				
				for(var j=0; j<this.repeated.length; j++){

					//Utilizamos esta funcion de la libreria de java script para verificar la comparacion
					if(JSON.stringify(succesors[i].state) == JSON.stringify(this.repeated[j].state))
						bool = 1;	

				}

				if(bool == 0)
					//Se agrega el nodo a la cola de no estar repetido
					this.strategy.add(this.queue,getNode(succesors[i],node,this.problem.h(succesors[i].state)));

			}


		}
	}

};

module.exports = Search;