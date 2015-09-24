
var Search = function(problem, strategy){
	this.problem = problem;
	this.strategy = strategy;
	this.queue = [];
	this.repeated = [];
};

/**
Construye un arreglo (path) por medio de una LIFO
que va desde el ultimo nodo revisado hasta el nodo
inicial recorriendo sus respectivos parents.

Captura solamente la accion y el estado de cada nodo.
**/

Search.prototype.printPath = function(node){
	var path = [];
	var n = node;
	while (n!=undefined){
		path.unshift({action:n.action,state:n.state, cost:n.cost, h:n.h, depth:n.depth});
		n = n.parent;
	}
	return path;
};

Search.prototype.run = function(){
	
	/**
	Construye un nodo utilizando informacion dos objetos
	succesor, el padre y el hijo.

	El objeto succesor se declara en el "Problema", y es
	la repesentacion de un nodo del arbol de busqueda.
	**/
	
	var getNode = function(succesor,parent, h){
		return {
			state: succesor.state,	
			action: succesor.action,
			cost: parent.cost + succesor.cost,
			h: h,
			parent: parent,
			depth: parent.depth+1
		}
	};

	/**
	Construccion de un nodo inicial que contendrá los
	estados declarados en la instanciación del objeto
	"Problema".

	Será el punto inicial del arbol de búsqueda.
	**/
	var initialNode = {
		state: this.problem.initial,
		action: '',
		cost: 0,
		h: this.problem.h(this.problem.initial),
		parent: undefined,
		depth: 0

	}
	//se agrega nodo inicial a arreglo "this.queue" segun el método en "Estrategia"
	this.strategy.add(this.queue, initialNode); 
	var rStateInitial = initialNode.state;
	console.log("\ninitial state= ", rStateInitial);

	//dummy node usado para comparar como primer elemento en arreglo repeated[]
	var dummyNode = {
		state: {},
		action: '',
		cost: 0,
		h: 0,
		parent: undefined,
		depth: 0

	}
	this.strategy.add(this.repeated, dummyNode)

	/**
	El proceso de búsqueda inicia haciendo "shift" (sacando
	por el inicio del arreglo) al primer elemento, es decir, 
	al initialNode. Se comprueba el valor de "isGoal" del nodo,
	tal valor es regresado por una función delcarada en el "Problema";
	de ser verdadero se llama a la funcion this.prinPath, se
	imprime y se termina el algoritmo. 
	De ser falso se llama a la funcion succesor declarada en
	el "Problema". La función problem.succesors regresa un arreglo de objetos
	"succesor" que se almacenan en la variable succesors declarada
	más adelante.

	A partir de la variable succesors se itera agregando a this.queue
	los nodos que con cada iteracion uno a uno se van creando a partir del 
	arreglo de objetos succesorpreviamente almacenados.
	
	La forma en como los nodos son agregados a this.queue depende de la funcion
	add declarada en la "Estrategia".

	**/

	while (this.queue.length>0){
		//shift retira el elemento al inicio del arreglo 
		var node = this.queue.shift();
		
		/**
		node.state es una estructura que contiene una lista
		que describe el estado del ambiente.
		**/

		if (this.problem.isGoal(node.state)){
			console.log(this.printPath(node))
			return "Success";
		}else{
			
			var nodeState = node.state;
			var succesors = this.problem.successors(node.state);

			console.log("para ", nodeState);
			/**
				for que compara nodo actual con node visitados anteriormente,
				si se encuentra que el estado del nodo actual es igual al de
				un nodo visitado previamente se marca la variable booleana
				repeatedBool como verdadera.
			**/
			for (var j=0; j<this.repeated.length; j++){
				var repeatedState = this.repeated[j].state;
				console.log("comparar con ", repeatedState);

				if(JSON.stringify(nodeState) === JSON.stringify(repeatedState)){ 
					console.log("Estado repetido = ", repeatedState ); 
					var repeatedBool = true;
				}				
			}
			
			console.log();
			/**
				si la variable repeatedBool es verdadera expanden los sucesores del
				nodo actual y se agrega a la lista de nodos visitados, de lo contrario
				no se hace hace nada con el nodo; es decir, se ignora.

			**/
			if(!repeatedBool){
				for (var i=0; i<succesors.length; i++){
					this.strategy.add(this.queue, getNode(succesors[i], node, this.problem.h(succesors[i].state)));
				}
				this.strategy.add(this.repeated, node);
				repeatedBool = false;
			}
			else{
				repeatedBool = false;
			}
			
		}
	}
};

module.exports = Search;