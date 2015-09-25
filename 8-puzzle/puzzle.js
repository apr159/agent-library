
var puzzle = function(initial){
	this.initial = initial;
}
var h1 = function(current){
	var desordenados = 0;
	var solucion = [[1,2,3], [4,5,6],[7,8,0]];
					

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			

			if( solucion[i][j] != current.state.matriz[i][j]){
				desordenados = desordenados + 1;
				
				
			}
		};
	};
	return desordenados;
}

puzzle.prototype.isGoal = function(currentMat){
		var solucion = [[1,2,3], [4,5,6],[7,8,0]];

			// verificar si el nodo es la solucion
	var goal = true;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if( currentMat.matriz[i][j]!= solucion[i][j]){
				goal = false;
			}
		};
	};

	return goal;

}

puzzle.prototype.successors = function(current, valor){
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
			
			//casilla arriba de la vacia
			if( nueva_x >= 0){
				valor_cambio = current.matriz[nueva_x][vacia_y];
				var succesor = {
					state :(JSON.parse(JSON.stringify(current))),
					action:'Mover el '+valor_cambio,
					cost:0
				}
				
				succesor.state.matriz[vacia_x][vacia_y] = valor_cambio;
				succesor.state.matriz[nueva_x][vacia_y] = 0;
				succesor.cost = h1(succesor) + valor+1;
				succesor.depth = valor+1;

				sucesrs.push(succesor);
			}
			//casilla abajo de la vacia
			var nueva_x = vacia_x + 1;

			if( nueva_x < 3){
				valor_cambio = current.matriz[nueva_x][vacia_y];
				var succesor = {
					state :(JSON.parse(JSON.stringify(current))),
					action:'Mover el '+valor_cambio,
					cost:0
				}

				succesor.state.matriz[vacia_x][vacia_y] = valor_cambio;
				succesor.state.matriz[nueva_x][vacia_y] = 0;
								succesor.cost = h1(succesor) + valor+1;
				succesor.depth = valor+1;

				sucesrs.push(succesor);
			}
			//casilla izquierda de la vacia

			if( nueva_y >= 0){
				valor_cambio = current.matriz[vacia_x][nueva_y];
				var succesor = {
					state :(JSON.parse(JSON.stringify(current))),
					action:'Mover el '+valor_cambio,
					cost:0
				}

				succesor.state.matriz[vacia_x][vacia_y] = valor_cambio;
				succesor.state.matriz[vacia_x][nueva_y] = 0;
				succesor.cost = h1(succesor) + valor+1;
				succesor.depth = valor+1;

				sucesrs.push(succesor);
			}

			//casilla derecha de la vacia
			nueva_y = vacia_y + 1;

			if( nueva_y < 3){
				valor_cambio = current.matriz[vacia_x][nueva_y];
				var succesor = {
					state :(JSON.parse(JSON.stringify(current))),
					action:'Mover el '+valor_cambio,
					cost:0
				}

				succesor.state.matriz[vacia_x][vacia_y] = valor_cambio;
				succesor.state.matriz[vacia_x][nueva_y] = 0;
				succesor.cost = h1(succesor) + valor+1;
				succesor.depth = valor+1;

				sucesrs.push(succesor);
			}

		
	return sucesrs;
};


 module.exports = puzzle;