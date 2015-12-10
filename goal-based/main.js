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
/*var graph_1 = new Array(9);
graph_1[0] = [1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1];
graph_1[1] = [1,1,1,1,2,0,0,1,1,1,1,1,1,1,1,1,1];
graph_1[2] = [1,1,1,1,0,0,2,1,1,1,1,1,1,1,1,1,1];
graph_1[3] = [1,1,0,0,2,0,2,0,1,1,1,1,1,1,1,1,1];
graph_1[4] = [1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1];
graph_1[5] = [0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0];
graph_1[6] = [0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0];
graph_1[7] = [1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0];
graph_1[8] = [1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1];*/
/*var graph_1 = new Array(8);
graph_1[0] = [0,0,0,0,1,0,0,0,0,0,1,1];
graph_1[1] = [0,0,0,0,1,0,2,0,0,2,0,0];
graph_1[2] = [0,0,0,0,1,2,1,1,1,1,1,0];
graph_1[3] = [0,0,0,0,0,0,0,0,1,1,0,0];
graph_1[4] = [0,0,0,0,1,0,1,0,0,2,0,1];
graph_1[5] = [1,1,1,1,1,0,1,1,2,0,2,0];
graph_1[6] = [1,1,0,2,0,0,2,0,2,0,2,0];
graph_1[7] = [1,1,0,0,0,0,1,0,0,0,0,0];*/
/*var graph_1 = new Array(13);
graph_1[0]  = [0,2,2,0,0,0,2,2,0,0,2,0,2,0,0,0,0];
graph_1[1]  = [0,0,2,2,2,1,0,0,0,0,2,0,0,1,0,0,0];
graph_1[2]  = [0,2,0,0,0,1,0,2,2,0,2,2,0,1,0,0,0];
graph_1[3]  = [1,1,0,0,0,1,0,0,2,0,0,0,0,1,0,0,0];
graph_1[4]  = [0,0,0,0,0,1,0,2,0,2,0,2,0,1,0,0,0];
graph_1[5]  = [0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0];
graph_1[6]  = [1,0,1,0,0,1,0,0,2,0,2,0,0,1,0,0,0];
graph_1[7]  = [0,0,1,1,0,1,0,2,2,0,2,0,2,1,1,0,0];
graph_1[8]  = [0,0,0,1,0,1,0,0,2,0,0,0,0,0,0,1,0];
graph_1[9]  = [0,0,0,1,0,1,0,2,2,2,0,2,2,2,0,1,0];
graph_1[10] = [1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0];
graph_1[11] = [1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0];
graph_1[12] = [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0];*/

//three boxes
var boxes = new Array(3);
var targets = new Array(3);
boxes[0] = [6,3];
boxes[1] = [3,4];
boxes[2] = [5,2];
targets[0] = [5,5];
targets[1] = [5,3];
targets[2] = [4,6];

//six boxes
/*var boxes = new Array(6);
var targets = new Array(6);
boxes[0] = [1,4];
boxes[1] = [2,6];
boxes[2] = [3,4];
boxes[3] = [3,6];
boxes[4] = [6,1];
boxes[5] = [6,4];
targets[0] = [5,16];
targets[1] = [6,16];
targets[2] = [7,16];
targets[3] = [5,15];
targets[4] = [6,15];
targets[5] = [7,15];*/

//ten boxes
/*var boxes = new Array(10);
var targets = new Array(10);
boxes[0] = [1,6];
boxes[1] = [1,9];
boxes[2] = [2,5];
boxes[3] = [4,9];
boxes[4] = [5,8];
boxes[5] = [5,10];
boxes[6] = [6,3];
boxes[7] = [6,6];
boxes[8] = [6,8];
boxes[9] = [6,10];
targets[0] = [0,0];
targets[1] = [1,0];
targets[2] = [2,0];
targets[3] = [3,0];
targets[4] = [4,0];
targets[5] = [0,1];
targets[6] = [1,1];
targets[7] = [2,1];
targets[8] = [3,1];
targets[9] = [4,1];*/

//thirty-two boxes
/*var boxes = new Array(32);
var targets = new Array(32);
boxes[0]  = [0,1];
boxes[1]  = [0,2];
boxes[2]  = [0,6];
boxes[3]  = [0,7];
boxes[4]  = [0,10];
boxes[5]  = [0,12];
boxes[6]  = [1,2];
boxes[7]  = [1,3];
boxes[8]  = [1,4];
boxes[9]  = [1,10];
boxes[10] = [2,1];
boxes[11] = [2,7];
boxes[12] = [2,8];
boxes[13] = [2,10];
boxes[14] = [2,11];
boxes[15] = [3,8];
boxes[16] = [4,7];
boxes[17] = [4,9];
boxes[18] = [4,11];
boxes[19] = [6,8];
boxes[20] = [6,10];
boxes[21] = [7,7];
boxes[22] = [7,8];
boxes[23] = [7,10];
boxes[24] = [7,12];
boxes[25] = [8,8];
boxes[26] = [9,7];
boxes[27] = [9,8];
boxes[28] = [9,9];
boxes[29] = [9,11];
boxes[30] = [9,12];
boxes[31] = [9,13];
targets[0]  = [12,16];
targets[1]  = [9,2];
targets[2]  = [11,16];
targets[3]  = [9,1];
targets[4]  = [10,16];
targets[5]  = [9,0];
targets[6]  = [9,16];
targets[7]  = [8,2];
targets[8]  = [8,16];
targets[9]  = [8,1];
targets[10] = [7,16];
targets[11] = [8,0];
targets[12] = [7,15];
targets[13] = [7,0];
targets[14] = [6,16];
targets[15] = [6,15];
targets[16] = [6,14];
targets[17] = [5,14];
targets[18] = [5,15];
targets[19] = [5,16];
targets[20] = [4,16];
targets[21] = [4,15];
targets[22] = [4,14];
targets[23] = [3,14];
targets[24] = [3,15];
targets[25] = [3,16];
targets[26] = [2,16];
targets[27] = [2,15];
targets[28] = [2,14];
targets[29] = [1,14];
targets[30] = [1,15];
targets[31] = [1,16];*/

var loops = boxes.length;
for(var i=0; i<loops; i++){
	console.log('Initial environment:');
	console.log(graph_1);
	console.log();
	var end_point = targets[i];

	var problem = new Problem(graph_1);
	var search = new Search(problem, strategy, boxes, end_point);
	console.log('Actions:');
	var start_point = search.run();
	console.log();
	console.log('Box:    ',start_point);
	console.log('Target: ',end_point);
	for(var j=0; j<boxes.length; j++){
		if(boxes[j][0] == start_point.a && boxes[j][1] == start_point.b){
			boxes.splice(j,1); //elimina del array el box ya usado
		}
	}

	graph_1[start_point.a][start_point.b] = 0;
	graph_1[end_point[0]][end_point[1]] = 2;
	console.log();
	console.log('Final environment: ');
	console.log(graph_1);

	console.log('\n-----------------------------------\n');
}