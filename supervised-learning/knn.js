
var Knn = function(k){
	this.k = k;
	this.trainData = [];
}

Knn.prototype.train = function(data){
	console.log('Entrenamiento: Son ' + data.length + ' ejemplos')
	console.log('Soy kNN no hago nada')	
	this.trainData = data;
}

Knn.prototype.classify = function(element){
	var distance = function(a,b){
		var sum = 0.0;
		for (var i=0;i<a.length;i++){
			sum+= (b[i]-a[i])*(b[i]-a[i])
		}
		return Math.sqrt(sum);
	}

	function mode(array)
	{
	    if(array.length == 0)
	    	return null;
	    var modeMap = {};
	    var maxEl = array[0].value, maxCount = 1;
	    for(var i = 0; i < array.length; i++)
	    {
	    	var el = array[i].value;
	    	if(modeMap[el] == null)
	    		modeMap[el] = 1;
	    	else
	    		modeMap[el]++;	
	    	if(modeMap[el] > maxCount)
	    	{
	    		maxEl = el;
	    		maxCount = modeMap[el];
	    	}
	    }
	    return maxEl;
	}

	var neighbors = [];
	for (var j=0;j<this.trainData.length;j++){
		var trainElement = this.trainData[j]
		var dist = distance(element,trainElement.x);

		//Si la lista esta vacio, insertar
		if (neighbors.length===0){
			neighbors.push({d:dist,value:trainElement.y});
		//de otro modo	
		}else{
			var found = false;
			for (var i=0;i<neighbors.length && !found;i++){
				if (dist<neighbors[i].d){
					found = true;
					neighbors.splice(i, 0, {d:dist,value:trainElement.y});
				}
			}
			if (!found){
				neighbors.push({d:dist,value:trainElement.y});
			}
		}
			//console.log("----------------------")

			//console.log(neighbors)

	}
	//console.log(neighbors[0].value + " " + neighbors[1].value + " " +neighbors[2].value )
	return mode(neighbors.splice(0,this.k));
}

Knn.prototype.test = function(data){


	console.log('Probando: ' + data.length + ' ejemplos')
	var goods = 0;
	var bads = 0;
	var knn = this;
	var x = 0;

	data.forEach(function(element){
		
		//Clasificar el ejemplo
		var classification = knn.classify(element.x);
		console.log(element.y + " " + classification);
		//Verificar si la clasificación es correcta
		if (classification==element.y){
			goods++;
		}else{
			bads++;
		}

	});

	//Dar salida
	console.log("Buenos: " + goods);
	console.log("Malos: " + bads);
	console.log("Eficiencia: " + goods/(goods+bads));

}

module.exports = Knn;
