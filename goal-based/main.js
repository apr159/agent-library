var Search = require("./Search");
var Problem = require("./Sokoban");
var Strategy = require("./Astar");
var strategy = new Strategy();
var graph_1 = new Array(8);
graph_1[0] = [0,0,0,0,1,1,0,0];
graph_1[1] = [0,0,1,0,1,0,1,0];
graph_1[2] = [0,1,1,0,0,0,0,0];
graph_1[3] = [0,1,0,1,2,0,0,1];
graph_1[4] = [0,0,0,1,1,1,0,0];
graph_1[5] = [1,1,2,0,1,0,1,0];
graph_1[6] = [0,1,0,2,0,0,1,0];
graph_1[7] = [0,0,0,1,0,0,0,0];

//three boxes
var boxes = new Array(3);
var targets = new Array(3);
boxes[0] = [6,3];
boxes[1] = [3,4];
boxes[2] = [5,2];
targets[0] = [5,5];
targets[1] = [5,3];
targets[2] = [4,6];
var loops = boxes.length;
for(var i=0; i<loops; i++){
	console.log(graph_1);
	var end_point = targets[i];
	var problem = new Problem(graph_1);
	var search = new Search(problem, strategy, boxes, end_point);
	var start_point = search.run();
console.log(start_point)
	for(var j=0; j<boxes.length; j++){
		if(boxes[j][0] == start_point.a && boxes[j][1] == start_point.b){
			boxes.splice(j,1); //elimina del array el box ya usado
		}
	}

	graph_1[start_point.a][start_point.b] = 0;
	graph_1[end_point[0]][end_point[1]] = 2;
	console.log('');
	console.log(graph_1);

	console.log('\n-----------------------------------\n');
}