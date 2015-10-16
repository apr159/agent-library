var fs = require('fs')
var readline = require('readline')

var Dataset = function(fileName){
	this.dataset = [];	
	this.finished = false;
	this.fileName = fileName;
}

Dataset.prototype.readFile = function(callback){
	var r = readline.createInterface({
		input: fs.createReadStream(this.fileName)
	});

	var ds = this.dataset;
	
	r.on('line',function(line){
		var lineArray = line.split(';')
		var lineFloat = [];
		for (var i=0;i<lineArray.length-1;i++){
			lineFloat[i] = parseFloat(lineArray[i]);
		}
		ds.push({x:lineFloat,y:parseFloat(lineArray[lineArray.length-1])});
	});
	r.on('close',function(){
		callback(ds);
	});

	

}

module.exports = Dataset;
