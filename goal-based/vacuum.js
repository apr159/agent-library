
var Vacuum = function(initial){
	this.initial = initial;
}

Vacuum.prototype.isGoal = function(current){
	return current.room1 == 	'Clean' && current.room2 == 'Clean'
}

Vacuum.prototype.successors = function(current){
	var successors = [];

	//Move right
	if (current.vacuum == 'Left'){
		var succesor = {
			state :{room1: current.room1,
					 room2:current.room2,
					 vacuum:'Right'},
			action:'Right',
			cost:1
		}
		successors.push(succesor);
		

	}
		//Move left
	if (current.vacuum == 'Right'){
		var succesor = {
			state :{room1: current.room1,
					 room2:current.room2,
					 vacuum:'Left'},
			action:'Left',
			cost:1
		}
		successors.push(succesor);
		

	}
	if (current.vacuum == 'Left' && current.room1 =='Dirty'){
		var succesor = {
			state :{room1: 'Clean',
					 room2:current.room2,
					 vacuum:'Left'},
			action:'Aspire',
			cost:1
		}
		successors.push(succesor);
	}
	if (current.vacuum == 'Right' && current.room2 =='Dirty'){
		var succesor = {
			state :{room1: current.room1,
					 room2:'Clean',
					 vacuum:'Right'},
			action:'Aspire',
			cost:1
		}
		successors.push(succesor);
	}

	return successors;
	
};

module.exports = Vacuum;