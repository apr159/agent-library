var cueva = function() {
	x=0;
	y=0;
	haypozo=0;
	hayflecha=0;
	haymurcielaos=0;
	haywumpus=0;
	peste=0;
	aleteo=0;
	brisa=0;
}

cueva.prototype.setPosicion = function(x1, y1) {
	x=x1;
	y=y1;
}

cueva.prototype.SetContenido = function(codigo) {
	if (codigo=='P') {
		haypozo=1;
	} else{
		if (codigo=='F') {
			hayflecha=1;
		} else{
			if (codigo=='W') {
				haywumpus=1;
			} else{
				if (codigo=='M') {
					haymurcielaos=1;
				};
			};
		};
	};
}

cueva.prototype.setPeste= function(){
	peste=1;
}
cueva.prototype.setBrisa=function(){
	brisa=1;
}
cueva.prototype.setAleteo=function(){
	aleteo=1;
}

cueva.prototype.getContenido=function(){
	if (haypozo==1) {
		return 'P';
	} else{
		if (hayflecha==1) {
			return 'F';
		} else{
			if (haymurcielaos==1) {
				return 'M';
			} else{
				if (haywumpus==1) {
					return 'W';
				} else{ return 'N';};
			};
		};
	};
}

cueva.prototype.apesta=function(){
	return peste;
}

cueva.prototype.escuchoAleteo=function(){
	return aleteo;
}

cueva.prototype.hayBrisa=function(){
	return brisa;
}

module.exports = cueva;
