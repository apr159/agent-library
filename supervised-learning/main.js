var Dataset = require("./dataset");
var Knn = require("./knn")

var knn = new Knn(60);
var dataset = new Dataset('winequality-red.csv');

dataset.readFile(function(data){
	
	//Se usan los primeros 60% para entrenar
	knn.train(data.splice(0,data.length*0.6));

	//El resto 40% se usan para probar
	knn.test(data.splice(data.length*0.6+1,data.length));
});


