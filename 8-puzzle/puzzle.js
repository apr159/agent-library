
var puzzle = function(initial){
	this.initial = initial;
}
var h1 = function(current){
	var desordenados = 0;
	// var solucion = [[1,2,3], [8,0,4],[7,6,5]];
	var solucion = [[1,2,3], [4,5,6],[7,8,0]];
					// console.log( current.state.matriz);

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			// console.log( "valores "+ solucion[i][j]+"="+current.state.matriz[i][j]);

			if( solucion[i][j] != current.state.matriz[i][j]){
				desordenados = desordenados + 1;
				// console.log( "dfhgjk"+"["+i+","+j+"]");
				// console.log( desordenados);
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
//				console.log(current.matriz[i][j]);
			}
		};
	};

	return goal;

    // // compare lengths - can save a lot of time 
    // if (currentMat.length != solucion.length){
    //     return false;
    // }

    // for (var i = 0, l=currentMat.length; i < l; i++) {
    // 	for (var j=0,m=3;j<m;j++) {
    // 		// Check if we have nested arrays
	   //      if (currentMat[i][j] instanceof Array && solucion[i][j] instanceof Array) {
	   //          // recurse into the nested arrays
	   //          if (!(currentMat[i][j] == solucion[i][j]))
	   //              return false;       
	   //      }           
	   //      else if (currentMat[i][j] != solucion[i][j]) { 
	   //          // Warning - two different object instances will never be equal: {x:20} != {x:20}
	   //          return false;   
	   //      }  
    // 	}         
    // }       
    // return true;
}

puzzle.prototype.successors = function(current, valor){
// Determinar los estados a los que se puede llegar apartir del estado current
		//Determinamos la casilla vacia
		var sucesrs =[];
		console.log( "current");
		console.log( current);

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
				succesor.depth = valor+1
												// console.log("suc: " + succesor.matriz + "+" + succesor);

				sucesrs.push(succesor);
								console.log( "NUEVO");
				console.log( sucesrs[sucesrs.length-1]);
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
				succesor.depth = valor+1

				sucesrs.push(succesor);
								console.log( "NUEVO");
				console.log( sucesrs[sucesrs.length-1]);
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
				succesor.depth = valor+1

				sucesrs.push(succesor);
								console.log( "NUEVO");
				console.log( sucesrs[sucesrs.length-1]);
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
				succesor.depth = valor+1

				sucesrs.push(succesor);
				console.log( "NUEVO");
				console.log( sucesrs[sucesrs.length-1]);
			}


		
	return sucesrs;
};


// var puzzle1 = new puzzle({
// 		state: [[2,8,3], [1,6,4],[7,0,5]],
// 		action: '',
// 		cost: 0,
// 		parent: undefined,
// 		depth: 0
// })

// var obj = {
// 		state: {
// 			matriz:[[1,2,3], [4,5,6],[7,8,0]],
// 			// matriz:[[2,8,3], [1,6,4],[7,0,5]],
// 		},
// 		action: 'dfgh',
// 		cost: 66,
// 		parent: {		
// 			state: {
// 			matriz:[[2,8,3], [1,6,4],[7,0,5]]
// 			},
// 			action: '',
// 			cost: 0,
// 			parent: undefined,
// 			depth: 0
// 			},
// 		depth:0
// 	}
// 	console.log(puzzle1.isGoal(obj));

// // console.log("obj");
// // console.log(obj);
// // console.log("sucesor 1232");
// var suc = puzzle1.successors(obj);
// console.log(suc[0].state.matriz);
// console.log(suc[1].state.matriz);
// // console.log(suc[2].state.matriz);
// // console.log(suc[3].state.matriz);

// console.log("suc: ");
// console.log(suc[0]);
// console.log(suc[1]);
// console.log(suc[2]);
// // console.log(suc[3]);

 module.exports = puzzle;