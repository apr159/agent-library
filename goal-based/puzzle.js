var Puzzle = function(initial){
	this.initial = initial;
}

Puzzle.prototype.isGoal = function(current){
	return cuadro[0][0]===1 && cuadro[0][1]===2 && cuadro[0][2]===3 && 
	cuadro[1][0]===4 && cuadro[1][1]===5 && cuadro[1][2]===6 &&
	cuadro[2][0]===7 && cuadro[2][1]===8 && cuadro[2][2]===0
}
Puzzle.prototype.successors = function(current){
	var successors = [];
	var pi;
	var pj;
	var aux = new Array //se crea nuevo Array donde se guardaran los valores de cada posicion del cuadro
	for(i=0;i<3;i++){
		for(j=0;j<3;i++){
			if(current.cuadro[i][j]==0){ //encuentra la posicion donde esta el espacio vacio del puzzle
				pi=i; //posicion en la columna de la matriz
				pj=j; //posicion en la fila de la matriz
				var posicion =[i,j];
			}
			aux[i][j]=current.cuadro[i][j]
		}
	}
	switch (pi){
		case 0:{
			switch(pj){
				//caso en que el espacio vacio esta en la posicion [0,0] de la matriz y tiene 2 opciones para moverse, a la derecha y hacia abajo.
				case 0:{
					//se cambia la posicion del espacio vacio por el numero de la derrecha y la posicion de la derecha es ocupado por el espacio vacio.
					aux[pi][pj]=current.cuadro[pi+1][pj];
					aux[pi+1][pj]=current.cuadro[pi][pj];
					var succesor1={
						state:{
							cuadro:aux
						},
						action:'Mover a la derecha ', 
						cost:puzzle.h(current,pi,pj)
					}
					successors.push(succesor1);
					aux[pi+1][pj]=current.cuadro[pi+1][pj];//se regresa a su lugar el numero de la derecha
					//se cambia la posicion del espacio vacio por el numero de abajo y la posicion del numero de abajo es ocupado por el espacio vacio.
					aux[pi][pj]=current.cuadro[pi][pj+1];
					aux[pi][pj+1]=current-cuadro[pi][pj];
					var succesor2={
						state:{
							cuadro:aux
						},
						action:'Mover hacia abajo ',
						cost:puzzle.h(current,pi,pj)
					}
					successors.push(succesor2);
					break;
				}
				case 1:{// caso en el que el espacio vacio esta en la posicion [0,1] de la matriz y tiene 3 opciones para moverse, a la derecha, hacia abajo y a la izquierda.
					aux[pi][pj]=current.cuadro[pi+1][pj]; //se cambia la posicion del espacio vacio por el numero de la derecha.
					aux[pi+1][pj]=current.cuadro[pi][pj]; //se cambia la posicion del numero de la derecha por el espacio vacio.
					var succesor1={
						state:{
							cuadro:aux
						},
						action:'Mover a la derecha ',
						cost:puzzle.h(current,pi,pj)
					}
					successors.push(succesor1);
					aux[pi+1][pj]=current.cuadro[pi+1][pj];// se regresa el numero de la derecha a su lugar
					aux[pi][pj]=current.cuadro[pi-1][pj];//se cambia la posicion del espacio vacio por el numero de la izquieda.
					aux[pi-1][pj]=current.cuadro[pi][pj];//se cambia la posicion del numro de la derecha por el espacio vacio.
					var succesor2={
						state:{cuadro:aux},
						action:'Mover a la izquierda ',
						cost:Puzzle.h(current,pi,pj)
					}
					successors.push(succesor2);
					aux[pi-1][pj]=current.cuadro[pi][pj];//se regresa el numero de la izquierda a su lugar
					aux[pi][pj]=current.cuadro[pi][pj+1];//se cambia la posicion del espacio vacio por el numero de abajo.
					aux[pi][pj+1]=current-cuadro[pi][pj];//se cambia la posicion del del numero de abajo por el espacio vacio.
					var succesor3={
						state:{cuadro:aux},
						action:'Mover hacia abajo',
						cost:Puzzle.h(current,pi,pj)
					}
					successors.push(succesor3);
					break;
				}
				case 2:{//caso en el que el que el espacio vacio esta en la posicion [0,2] de la matriz y tiene 2 opciones para mover, a la izquierda y hacia abajo
					aux[pi][pj]=current.cuadro[pi-1][pj];//cambia la posicion del espacio vacio por el numero de la izquierda.
					aux[pi-1][pj]=current.cuadro[pi][pj];//cambia la posicion del numero de la izquierda por el espacio vacio.
					var succesor1={
						state:{cuadro:aux},
						action:'Mover a la izquierda ',
						cost:Puzzle.h(current,pi,pj)
					}
					successors.push(succesor1);
					aux[pi-1][pj]=current.cuadro[pi][pj];//se regresa el numero de la izquierda a su lugar
					aux[pi][pj]=current.cuadro[pi][pj+1];//cambia la posicion del espacio vacio por el numero de abajo.
					aux[pi][pj+1]=current-cuadro[pi][pj];//cambia la posicion del numero de abajo por el espacio vacio.
					var succesor2={
						state:{cuadro:aux},
						action:'Mover hacia abajo' ,
						cost:Puzzle.h(current,pi,pj)
					}
					successors.push(succesor2);
					break;
				}
			}
			break;
		}
		case 1:{
			switch(j){
				case 0:{//caso en el que el espacio vacio esta en la posicion [1,0] de la matriz y tiene 3 opciones para moverse,derecha,abajo y arriba.
					aux[pi][pj]=current.cuadro[pi+1][pj];
					aux[pi+1][pj]=current.cuadro[pi][pj];
					var succesor1={
						state:{cuadro:aux},
						action:'Mover a la derecha ', 
						cost:puzzle.h(current,pi,pj)
					}
					successors.push(succesor1);
					aux[pi+1][pj]=current.cuadro[pi+1][pj];
					aux[pi][pj]=current.cuadro[pi][pj+1];
					aux[pi][pj+1]=current-cuadro[pi][pj];
					var succesor2={
						state:{cuadro:aux},
						action:'Mover hacia abajo ',
						cost:puzzle.h(current,pi,pj)
					}
					successors.push(succesor2);
					aux[pi][pj+1]=current-cuadro[pi][pj+1];
					aux[pi][pj]=current-cuadro[pi][pj-1];
					aux[pi][pj-1]=current-cuadro[pi][pj];
					var succesor3={
						state:{cuadro:aux},
						action:'Mover hacia arriba',
						cost:puzzle.h(current,pi,pj)
					}
					successors.push(succesor3);
					break;
				}
				case 1:{//caso en el que el espacio vacio esta en la posicion [1,1] y se puede mover a la derecha,izquieda,abajo y arriba
					aux[pi][pj]=current.cuadro[pi+1][pj];
					aux[pi+1][pj]=current.cuadro[pi][pj];
					var succesor1={
						state:{cuadro:aux},
						action:'Mover a la derecha ', 
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor1);
					aux[pi+1][pj]=current.cuadro[pi+1][pj];
					aux[pi][pj]=current.cuadro[pi][pj+1];
					aux[pi][pj+1]=current.cuadro[pi][pj];
					var succesor2={
						state:{cuadro:aux},
						action:'Mover hacia abajo ',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor2);
					aux[pi][pj+1]=current.cuadro[pi][pj+1];
					aux[pi][pj]=current.cuadro[pi][pj-1];
					aux[pi][pj-1]=current.cuadro[pi][pj];
					var succesor3={
						state:{cuadro:aux},
						action:'Mover hacia arriba',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor3);
					aux[pi][pj-1]=current.cuadro[pi][pj-1];
					aux[pi][pj]=current.cuadro[pi-1][pj];
					aux[pi-1][pj]=current.cuadro[pi][pj];
					var succesor4={
						state:{cuadro:aux},
						action:'Mover a la izquierda',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor4);
					break;
				}
				case 2:{//caso en el que el espacio vacio esta en la posicion [1,2] y se puede mover hacia la izquierda,arriba y abajo
					aux[pi][pj]=current.cuadro[pi][pj+1];
					aux[pi][pj+1]=current.cuadro[pi][pj];
					var succesor1={
						state:{cuadro:aux},
						action:'Mover hacia abajo ',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor1);
					aux[pi][pj+1]=current.cuadro[pi][pj+1];
					aux[pi][pj]=current.cuadro[pi][pj-1];
					aux[pi][pj-1]=current.cuadro[pi][pj];
					var succesor2={
						state:{cuadro:aux},
						action:'Mover hacia arriba',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor2);
					aux[pi][pj-1]=current.cuadro[pi][pj-1];
					aux[pi][pj]=current.cuadro[pi-1][pj];
					aux[pi-1][pj]=current.cuadro[pi][pj];
					var succesor3={
						state:{cuadro:aux},
						action:'Mover a la izquierda',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor3);
					break;
				}
			}
			break;
		}
		case 2:{//caso en el que el espacio vacio esta en la posicion [2,0] y se puede mover hacia la derecha y arriba
			switch(j){
				case 0:{
					aux[pi][pj]=current.cuadro[pi][pj-1];
					aux[pi][pj-1]=current.cuadro[pi][pj];
					var succesor1={
						state:{cuadro:aux},
						action:'Mover hacia arriba',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor1);
					aux[pi][pj-1]=current.cuadro[pi][pj-1];
					aux[pi][pj]=current.cuadro[pi+1][pj];
					aux[pi+1][pj]=current.cuadro[pi][pj];
					var succesor2={
						state:{cuadro:aux},
						action:'Mover a la derecha ', 
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor2);
					break;
				}
				case 1:{//caso en el que el espacio vacio esta en la posicion [2,1] y se puede mover hacia la derecha,izquierda y arriba.
					aux[pi][pj]=current.cuadro[pi][pj-1];
					aux[pi][pj-1]=current.cuadro[pi][pj];
					var succesor1={
						state:{cuadro:aux},
						action:'Mover hacia arriba',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor1);
					aux[pi][pj-1]=current.cuadro[pi][pj-1];
					aux[pi][pj]=current.cuadro[pi+1][pj];
					aux[pi+1][pj]=current.cuadro[pi][pj];
					var succesor2={
						state:{cuadro:aux},
						action:'Mover a la derecha ', 
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor2);
					aux[pi+1][pj]=current.cuadro[pi+1][pj];
					aux[pi][pj]=current.cuadro[pi-1][pj];
					aux[pi-1][pj]=current.cuadro[pi][pj];
					var succesor3={
						state:{cuadro:aux},
						action:'Mover a la izquierda',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor3);
					break;
				}
				case 2:{//caso en el que el espacio vacio esta en la posicion [2,2] y se puede mover hacia la izquierda y arriba.
					aux[pi][pj]=current.cuadro[pi][pj-1];
					aux[pi][pj-1]=current.cuadro[pi][pj];
					var succesor1={
						state:{cuadro:aux},
						action:'Mover hacia arriba',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor1);
					aux[pi][pj-1]=current.cuadro[pi][pj-1];
					aux[pi][pj]=current.cuadro[pi-1][pj];
					aux[pi-1][pj]=current.cuadro[pi][pj];
					var succesor3={
						state:{cuadro:aux},
						action:'Mover a la izquierda',
						cost:puzzle.h(aux,pi,pj)
					}
					successors.push(succesor3);
					break;
				}
			}			
			break;
		}
	}
}

Puzzle.prototype.h =function(aux, n, m){ //la heuristica las entradas aux que es la matriz, la n es la posicion en la columna y la m es la posicion en las filas.
	var Ordenado=[[1,2,3][4,5,6][7,8,0]] //es el puzzle ya ordenado
	var costoi; //se declara la variable que tendra el costo de las i
	var costoj; // se delcara la variable que tendra el costo de las j
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(current.cuadro[n,m]==Ordenado[i][j]){
				if(i>n){//si la i es mayor a la n significa que esta en una posicion abajo de la matriz de donde debe estar.
					costoi=i-n;//se resta para saber cuanto tiene que subir y asi obtener el costo de la i.
				}
				else{//si la i es menor que la n significa que esta en una posicion arriba de la matriz de donde debe estar.
					costoi=n-i;//se le resta a la n para saber cuanto tiene que bajar y asi obtener el costo de la i.
					//si i resultara igual a n entonces al restarlo el costo seria 0.
				}
				if(j>m){//si la j es mayor a la m significa que esta en una posicion a la izquierda de donde debe estar.
					costoj=j-m; //se le resta j a m para saber cuanto tiene que moverse a la derecha y asi sacar el costo de la j.
				}
				else{//si la j es menor a me significa que esta en una posicion a la derecha de donde debe estar.
					costoj=m-j //se le resta m a j para saber cuanto tiene que moverse a la izquierda y asi sacar el costo de la j.
					//si j resultara igual a m entonces al restarlo el costo seria 0.
				}
			}

		}
	}
	var costo=costoi+costoj; //se suman los costos para sacar el costo final.
	return costo;

}