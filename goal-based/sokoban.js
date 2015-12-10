var Sokoban = function(initial){
	this.initial = initial;
}

Sokoban.prototype.isGoal = function(pos, end){
	if(pos.i==end[0] && pos.j==end[1]){
		return 1;
	}
	return 0;
}

Sokoban.prototype.heuristic = function(pos_i, pos_j, final_pos){
	//manhattan distance
	var d1 = Math.abs(final_pos[0] - pos_i);
	var d2 = Math.abs(final_pos[1] - pos_j);

	return d1 + d2;
}

Sokoban.prototype.successors = function(curr_pos, final_pos, graph){
	var successors = [];
	//console.log('looking for successors');
	//move up
	if(curr_pos.i-1 >= 0 && graph[curr_pos.i-1][curr_pos.j] != 1 && graph[curr_pos.i-1][curr_pos.j] != 2){
		var next_node = {
			position:{
				i: curr_pos.i-1,
				j: curr_pos.j,
			},
			action:'Up',
			g: 1,
			h: this.heuristic(curr_pos.i-1, curr_pos.j, final_pos)
		}
		successors.push(next_node);
	}

	//move down
	if(curr_pos.i+1 < graph.length && graph[curr_pos.i+1][curr_pos.j] != 1 && graph[curr_pos.i+1][curr_pos.j] != 2){
		var next_node = {
			position:{
				i: curr_pos.i+1,
				j: curr_pos.j,
			},
			action:'Down',
			g: 1,
			h: this.heuristic(curr_pos.i+1, curr_pos.j, final_pos)
		}
		successors.push(next_node);
	}

	//move left
	if(curr_pos.j-1 >= 0 && graph[curr_pos.i][curr_pos.j-1] != 1 && graph[curr_pos.i][curr_pos.j-1] != 2){
		var next_node = {
			position:{
				i: curr_pos.i,
				j: curr_pos.j-1,
			},
			action:'Left',
			g: 1,
			h: this.heuristic(curr_pos.i, curr_pos.j-1, final_pos)
		}
		successors.push(next_node);
	}

	//move right
	if(curr_pos.j+1 < graph[0].length && graph[curr_pos.i][curr_pos.j+1] != 1 && graph[curr_pos.i][curr_pos.j+1] != 2){
		var next_node = {
			position:{
				i: curr_pos.i,
				j: curr_pos.j+1,
			},
			action:'Right',
			g: 1,
			h: this.heuristic(curr_pos.i, curr_pos.j+1, final_pos)
		}
		successors.push(next_node);
	}

	return successors;	
};

module.exports = Sokoban;