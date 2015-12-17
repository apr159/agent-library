var Caverna = require("./cueva.js");

var laberinto = function (m, n) { //crear laberinto	
var cueva1 = new Caverna();

//prueba

this.laberinto1=new Array();

for (var i = 0; i < n; i++) {
	this.laberinto1[i]=new Array();
};

for (var i = 0; i < m; i++) {
	for (var j = 0; j < n; j++) {
		cueva1.setPosicion(i,j);
		this.laberinto1[i][j]=cueva1;
	};
};

}

laberinto.prototype.printer=function(){
	console.log(this.laberinto1);
}

laberinto.prototype.generarmundo = function(m,n,Nw,Np,Nm){
var fil=0;
var col=0;
var cant=0;
	//coloca los wumpus
	cant=0;
	while(cant<Nw){
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (this.laberinto1[fil][col].getContenido() == 'N') {
			this.laberinto1[fil][col].SetContenido('W');
			cant++;
		};
	}

	//coloca los pozos
	cant=0;
	while(cant<Np){
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (this.laberinto1[fil][col].getContenido() == 'N') {
			this.laberinto1[fil][col].SetContenido('P');
			cant++;
		};
	}

	//coloca los murcielagos
	cant=0;
	while(cant<Nm){
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (this.laberinto1[fil][col].getContenido() == 'N') {
			this.laberinto1[fil][col].SetContenido('M');
			cant++;
		};
	}

	//coloca la flecha
	cant=0;
	while(cant<1){
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (this.laberinto1[fil][col].getContenido() == 'N') {
			this.laberinto1[fil][col].SetContenido('F');
			cant++;
		};
	}

	//coloca el oro
	cant=0;
	while(cant<1){
		fil = Math.floor( Math.random()*m);
		col = Math.floor( Math.random()*n);
		if (this.laberinto1[fil][col].getContenido() == 'N') {
			this.laberinto1[fil][col].SetContenido('O');
			cant++;
		};
	}
}

laberinto.prototype.AnalizarSensaciones=function(m,n,laberinto1) {
	for (var i = 0; i < m; i++) {
		for (var j = 0; j < n; j++) {
			//si esta en la esuqina superior izq
			if (i==0 && j==0) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || (this.laberinto1[i+1][j].getContenido()=='W')) {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || (this.laberinto1[i+1][j].getContenido()=='P')) {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M' || (this.laberinto1[i+1][j].getContenido()=='M')) {
					this.laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la primera fila que no sea esquina	
			if (i==0 && j!=0 && j!=n) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || this.laberinto1[i][j-1].getContenido()=='W' || this.laberinto1[i+1][j].getContenido()=='W') {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || this.laberinto1[i][j-1].getContenido()=='P' || this.laberinto1[i+1][j].getContenido()=='P') {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M' || this.laberinto1[i][j-1].getContenido()=='M' || this.laberinto1[i+1][j].getContenido()=='M') {
					this.laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la esquina superior der
			if (i==0 && j==n) {
				if (this.laberinto1[i][j-1].getContenido()=='W' || (this.laberinto1[i+1][j].getContenido()=='W')) {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j-1].getContenido()=='P' || (this.laberinto1[i+1][j].getContenido()=='P')) {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j-1].getContenido()=='M' || (this.laberinto1[i+1][j].getContenido()=='M')) {
					this.laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la ultima fila que no sea esquina
			if (i==m && j!=0 && j!=n) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || this.laberinto1[i][j-1].getContenido()=='W' || this.laberinto1[i-1][j].getContenido()=='W') {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || this.laberinto1[i][j-1].getContenido()=='P' || this.laberinto1[i-1][j].getContenido()=='P') {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M' || this.laberinto1[i][j-1].getContenido()=='M' || this.laberinto1[i-1][j].getContenido()=='M') {
					this.laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la esquina inferior izq
			if (i==m && j==0) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || (this.laberinto1[i-1][j].getContenido()=='W')) {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || (this.laberinto1[i-1][j].getContenido()=='P')) {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M' || (this.laberinto1[i-1][j].getContenido()=='M')) {
					this.laberinto1[i][j].setAleteo();
				}; 
			};

			//si esta en la primera columna que no sea esquina
			if (j==0 && i!=0 && i!=m) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || this.laberinto1[i-1][j].getContenido()=='W' || this.laberinto1[i+1][j].getContenido()=='W') {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || this.laberinto1[i-1][j].getContenido()=='P' || this.laberinto1[i+1][j].getContenido()=='P') {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M' || this.laberinto1[i-1][j].getContenido()=='M' || this.laberinto1[i+1][j].getContenido()=='M') {
					this.laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la ultima columna que no sea esquina
			if (j==n && i!=0 && i!=m) {
				if (this.laberinto1[i][j-1].getContenido()=='W' || this.laberinto1[i-1][j].getContenido()=='W' || this.laberinto1[i+1][j].getContenido()=='W') {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j-1].getContenido()=='P' || this.laberinto1[i-1][j].getContenido()=='P' || this.laberinto1[i+1][j].getContenido()=='P') {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j-1].getContenido()=='M' || this.laberinto1[i-1][j].getContenido()=='M' || this.laberinto1[i+1][j].getContenido()=='M') {
					this.laberinto1[i][j].setAleteo();
				};
			};

			//si esta en la esquina inferior der
			if (i==m && j==n) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || (this.laberinto1[i-1][j].getContenido()=='W')) {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || (this.laberinto1[i-1][j].getContenido()=='P')) {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M' || (this.laberinto1[i-1][j].getContenido()=='M')) {
					this.laberinto1[i][j].setAleteo();
				};
			};

			if ((i>0 && i<m) && (j>0 && j<n)) {
				if (this.laberinto1[i][j+1].getContenido()=='W' || this.laberinto1[i][j-1].getContenido()=='W' || this.laberinto1[i-1][j].getContenido()=='W' || this.laberinto1[i+1][j].getContenido()=='W') {
					this.laberinto1[i][j].setPeste();
				};
				if (this.laberinto1[i][j+1].getContenido()=='P' || this.laberinto1[i][j-1].getContenido()=='P' || this.laberinto1[i-1][j].getContenido()=='P' || this.laberinto1[i+1][j].getContenido()=='P') {
					this.laberinto1[i][j].setBrisa();
				};
				if (this.laberinto1[i][j+1].getContenido()=='M'|| this.laberinto1[i][j-1].getContenido()=='M' || this.laberinto1[i-1][j].getContenido()=='M' || this.laberinto1[i+1][j].getContenido()=='M') {
					this.laberinto1[i][j].setAleteo();
				};
			};
		};
	}
}

laberinto.prototype.getCueva = function(x,y) {
	return this.laberinto1[x][y];
}

module.exports = laberinto;