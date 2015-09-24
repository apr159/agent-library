
//var solucion = [[0,1,2], [3,4,5],[6,7,8]];
var solucion = [[1,2,3], [8,0,4],[7,6,5]];

// construimos una variable nodo

function nodo(arr, f_valor,g_valor, father){
	this.matriz = arr;
	this.f = f_valor;
	this.padre = father;
	this.g = g_valor;
}

function copyNode (nodoClonar) {
	var matriz,f,g,padre;
	var temp = (JSON.parse(JSON.stringify(nodoClonar.matriz))); 
	matriz = temp;
	f = (JSON.parse(JSON.stringify(nodoClonar.f)));
	padre = nodoClonar.padre;
	g = (JSON.parse(JSON.stringify(nodoClonar.g)));

	var nodoNuevo = new nodo(matriz,f,g,padre);
	return nodoNuevo;
};

function isGoal (current) {
	// verificar si el nodo es la solucion
	var goal = true;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if( current.matriz[i][j]!= solucion[i][j]){
				goal = false;
//				console.log(current.matriz[i][j]);
			}
		};
	};

	return goal;
}
function getPadreInicial (current) {
	if(current.padre!= null){
		return getPadreInicial(current.padre);
	}
}
function getPatron (current) {
	var patron = [];
	while(getPadreInicial(current)!=null){
		patron.push(getPadreInicial(current));
	}
}
nodo.prototype.compara = function(nodoComp) {
	var resultado = false;
		var iguales = true;
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if( nodoComp.matriz[i][j] != this.matriz[i][j]){
					iguales = false;
				}
			};
		};
	
	if (iguales) {
		resultado = true;
	};

	return resultado;
};

// como crear un nodo
	var items2 = [[2,8,3], [1,0,4],[7,6,5]];
	var nodo1 = new nodo(items2,4, 0,null);
	// nodo1.matriz[2][1]=1;
	//console.log(nodo1);

	var items = [[1,2,3], [0,8,4],[7,6,5]];
	// var items = [[1,2,3], [8,0,4],[7,6,5]];
	// items =[[2,8,3], [1,0,7],[5,6,4]];
	var nodo2 = new nodo(items, 3, 0,2);
	// var nodo2 = new nodo(items, 1, 0);

// definimos las dos listas de nodos
var abierto = [];
var cerrado = [];

var Astart = function(start){
	abierto.push(start);

	while(abierto != []) {
		
	
		// console.log("abierto = "+abierto.length);

		// Localizar el valor minimo de los nodos en la lista abierto;
		var menor_f = abierto[0].f;
		var menor_ind = 0;

			for (var i = 0; i < abierto.length; i++) {
				if (abierto[i].f <= menor_f){
					menor_ind = i;
					// var actual = new nodo();
					// actual = abierto[i];

				}
			};

				// var actual = new nodo(abierto[menor_ind].matriz,abierto[menor_ind].f);
		// var actual = (JSON.parse(JSON.stringify(abierto[menor_ind])));
		var actual = copyNode(abierto[menor_ind]);
		//console.log("abierto splice= "+ abierto.length);

				//console.log("abierto before= ");
		abierto.splice(menor_ind, 1);
				//console.log("abierto after= ");
				//console.log( abierto);

		cerrado.push(actual);
		// console.log( actual.matriz);
		// console.log("cerrado = "+ cerrado.length);
		console.log("abierto splice= "+ abierto.length);
		console.log("cerrado splice= "+ cerrado.length);


	//goal
		//Retornar el patron,
		if (isGoal(actual)) {
			console.log("buen pedo");
			var solucion = getPatron(actual);
			console.log(solucion);

		}else{
			console.log("mal pedo");

		}

		var actual2 = copyNode(actual);
		var sucessors = sucesores(actual2);

		// if(nodo1.compara(nodo2)){
		// 	console.log("iguales");
		// }else{
		// 	console.log("diferentes");

		//}
		// console.log(abierto[0].matriz[2]);
		// console.log(abierto[1].matriz[2]);
				// console.log("valor de sucessors = "+ sucessors.length);
				// console.log(sucessors[0]);
				// console.log("valor de abierto = "+ abierto.length);
				// console.log("valor de cerrado = "+ cerrado.length);


		// Busca si el sucesor esta en abierto o cerrado.
		for (var i = 0 ; i < sucessors.length ; i++) {
			var estaAbierto = false;
			var estaCerrado = false;
			var indiceAbierto;
			// console.log("compara: ");
			// console.log(sucessors[i]);

			for(var j = 0; j< abierto.length; j++){
				var suc = copyNode(sucessors[i]);
				var open = copyNode(abierto[j]);
				// console.log("compara: "+sucessors[0].compara(abierto[0]));
				// console.log("compara: "+suc.compara(open));
				if(suc.compara(open)){
					estaAbierto = true;
					indiceAbierto = j;
				}
			//Ya se si esta en abierto
			}
			
			//si el nodo esta en abierto
			if (estaAbierto) {
				if (abierto[indiceAbierto].g > sucessors[i].g) {
					//se asigna el camino mas corto
					abierto[indiceAbierto].g = sucessors[i].g;
					abierto[indiceAbierto].padre = sucessors[i].padre;
					};
			}
			for(var k = 0; k < cerrado.length; k++){
				var suc = copyNode(sucessors[i]);
				var closed = copyNode(cerrado[k]);
				console.log(closed);
				if(suc.compara(closed)){
					estaCerrado = true;
					var indiceCerrado =k;
				}

			}

			//Ya se si esta en cerrado
			if (estaCerrado) {
				if (cerrado[indiceCerrado].g > sucessors[i].g) {
					//se asigna el camino mas corto
					cerrado[indiceCerrado].g = sucessors[i].g;
					cerrado[indiceCerrado].padre = sucessors[i].padre;
				//	abierto.push(sucessors[i]);
					cerrado.splice(indiceCerrado, 1);
					};
			};		

			//si no esta en ninguna
			if(estaAbierto==false && estaCerrado == false){
				//asignar el valor de f
				sucessors[i].f =sucessors[i].f + h1(sucessors[i]) + sucessors[i].g;
				abierto.push(sucessors[i]);
					// console.log("algo?");
					// console.log(sucessors[i].f);

			}

			
		};
			
	// console.log("original");
	// console.log(actual.matriz[0]);
	// console.log(actual.matriz[1]);
	// console.log(actual.matriz[2]);
	// console.log("abierto = "+ abierto.length);
	console.log(abierto);
	// console.log(abierto[1]);
	// console.log(abierto[2]);
	// console.log("abierto after= ");
	// 			 console.log( abierto);

	}



}

var h1 = function(current){
	var desordenados = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if( solucion[i][j] != current.matriz[i][j]){
				desordenados = desordenados + 1;

	// 							console.log("desordenados");

	// console.log(current.matriz[i][j]);
	// console.log(desordenados);

			}
		};
	};
	return desordenados;
}

var sucesores = function(current){
	// Determinar los estados a los que se puede llegar apartir del estado current
		//Determinamos la casilla vacia
		var sucesrs =[];

		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if( current.matriz[i][j] == 0){
					var vacia_x = i;
					var vacia_y = j;
				}
			};
		};

			//hacemos todos los movimientos y solo dejamos los posibles
			var nueva_x = vacia_x - 1;
			var nueva_y = vacia_y - 1;
			var valor_cambio;
			// var sucesor = (JSON.parse(JSON.stringify(current)));
			var sucesor = copyNode(current);
			sucesor.g = sucesor.g +1;
			sucesor.padre = current;

			//casilla arriba de la vacia
			if( nueva_x >= 0){
				valor_cambio = current.matriz[nueva_x][vacia_y]
				sucesor.matriz[vacia_x][vacia_y] = valor_cambio;
				sucesor.matriz[nueva_x][vacia_y] = 0;
				sucesrs.push(sucesor);

			}

			//casilla abajo de la vacia
			var nueva_x = vacia_x + 1;
			// var sucesor = (JSON.parse(JSON.stringify(current)));
			var sucesor = copyNode(current);
			sucesor.g = sucesor.g +1;
			sucesor.padre = current;

			if( nueva_x < 3){
				valor_cambio = current.matriz[nueva_x][vacia_y];
				sucesor.matriz[vacia_x][vacia_y] = valor_cambio;
				sucesor.matriz[nueva_x][vacia_y] = 0;
				sucesrs.push(sucesor);

			}

			//casilla izquierda de la vacia
			//var sucesor = (JSON.parse(JSON.stringify(current)));
			var sucesor = copyNode(current);
			sucesor.g = sucesor.g +1;
			sucesor.padre = current;

			if( nueva_y >= 0){
				valor_cambio = current.matriz[vacia_x][nueva_y];
				sucesor.matriz[vacia_x][vacia_y] = valor_cambio;
				sucesor.matriz[vacia_x][nueva_y] = 0;
				sucesrs.push(sucesor);
			}

			//casilla derecha de la vacia
			// var sucesor = (JSON.parse(JSON.stringify(current)));
			var sucesor = copyNode(current);
			sucesor.g = sucesor.g +1;
			sucesor.padre = current;
			var nueva_y = vacia_y + 1;

			if( nueva_y < 3){
				valor_cambio = current.matriz[vacia_x][nueva_y];
				sucesor.matriz[vacia_x][vacia_y] = valor_cambio;
				sucesor.matriz[vacia_x][nueva_y] = 0;
				sucesrs.push(sucesor);
			}
// for (var i =0; i < sucesrs.length ; i++) {

// 			console.log("sucesor numero "+i);
// 			console.log(sucesrs[i]);
// };
	

			return sucesrs;
}
Astart(nodo1);