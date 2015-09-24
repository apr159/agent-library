
/**
En inicial se recibe una lista de estados que modelan el
estado inicial del ambiente.
**/
var Vacuum = function(initial){
	this.initial = initial;
}

//se define el estado objetivo
Vacuum.prototype.isGoal = function(current){
	return current.room1 == 'Clean' && current.room2 == 'Clean'
}

//heuristica para problema Vacuum
Vacuum.prototype.h = function(current){
	var h=0;
	current.room1 == "Dirty" ? h++ : h;
	current.room2 == "Dirty" ? h++ : h;

	return h
}

/**
La funcion successors guarda en un arreglo llamado tambien
succesor, todos los posibles hijos que se pusieran desprender
de un nodo padre, segun un algoritmo de busqueda.

Recibe como argumento un conjunto de estados que modelan el
estado actual del ambiente. En base a eso se hace una busqueda
procedural de los posibles cambios que pudiran haber en el ambiente
segun una accion a ejecutar.

Al elegir las opciones posibles se genera un objeto "succesor" que
se guarda en el arreglo "successors" previamente declarado y se
retorna como resultado.
**/

Vacuum.prototype.successors = function(current){
	var successors = [];

	//Move right
	if (current.vacuum == 'Left'){
		var succesor = {
			state :{room1: current.room1,
					 room2:current.room2,
					 vacuum:'Right'},
			action:'Right',
			cost:1
			
		}
		successors.push(succesor);
		

	}
		//Move left
	if (current.vacuum == 'Right'){
		var succesor = {
			state :{room1: current.room1,
					 room2:current.room2,
					 vacuum:'Left'},
			action:'Left',
			cost:1
			
		}
		successors.push(succesor);
		

	}
	if (current.vacuum == 'Left' && current.room1 =='Dirty'){
		var succesor = {
			state :{room1: 'Clean',
					 room2:current.room2,
					 vacuum:'Left'},
			action:'Aspire',
			cost:1
			
		}
		successors.push(succesor);
	}
	if (current.vacuum == 'Right' && current.room2 =='Dirty'){
		var succesor = {
			state :{room1: current.room1,
					 room2:'Clean',
					 vacuum:'Right'},
			action:'Aspire',
			cost:1
			
		}
		successors.push(succesor);
	}

	return successors;
	
};

module.exports = Vacuum;