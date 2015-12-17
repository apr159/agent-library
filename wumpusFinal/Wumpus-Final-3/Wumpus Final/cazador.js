var laberinto = require("./laberinto");
var caverna = require("./cueva");

var cazador = function(laberinto1, m, n){
	var cueva1 = new caverna();
	var cont=0, x=0, y=0;
	while(cont<1){
		x = Math.floor( Math.random()*m);
		y = Math.floor( Math.random()*n);
		cueva1= laberinto1.getCueva(x,y);
		if (cueva1.getContenido()=='N') {
			xCazador=x;
			yCazador=y;
			tengoFlecha=0;
			oro=0;
			cont++;
		};
	}

}

cazador.prototype.Sentir=function(A){
	var cueva = new caverna();
	var feel = " ";
	cueva=A.getCueva(xCazador, yCazador);
	if (cueva.apesta()) {
		feel="apesta";
	};
	if (cueva.escuchoAleteo()) {
		feel= feel+" esucho aleteo";
	};
	if (cueva.hayBrisa()) {
		feel= feel+" brisa fuerte";
	};
	return feel;
}

cazador.prototype.reaccion=function(A){
	var cueva = new caverna();
	var estado = "vivo";
	cueva=A.getCueva(xCazador, yCazador);

	if (cueva.getContenido()=='W' && tengoFlecha==1) {
		estado="vivo";
	} else{
		if (cueva.getContenido()=='P' || cueva.getContenido()=='M' || cueva.getContenido()=='W') {
		estado="muerto";
	};
	};

	if (cueva.getContenido()=='F') {tengoFlecha=1;};
	if (cueva.getContenido()=='O') {oro=1;};
	return estado;
}

cazador.prototype.getX=function(){
	return xCazador;
}

cazador.prototype.getY=function(){
	return yCazador;
}

cazador.prototype.setX=function(x1){
	xCazador=x1;
}

cazador.prototype.setY=function(y1){
	yCazador=y1;
}

cazador.prototype.getFlecha=function(){
	return tengoFlecha;
}

cazador.prototype.setFlecha=function(op){
	tengoFlecha=op;
}

cazador.prototype.getOro=function(){
	return tengoFlecha;
}

cazador.prototype.setOro=function(op){
	tengoFlecha=op;
}

module.exports = cazador;












