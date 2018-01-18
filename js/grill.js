function grill(size) {
	//represents the restaurants grill//

	this.temperature = 0;
	this.on = false;
	this.contents = [
		[],
		[],
		[]
	];
	this.grillBoxConditions =
		[],
		[],
		[]
	];
	this.max_temperature = 0;
	this.dirt = 0
	this.items_number = 0
	this.currentStock = {
'chicken':{'max':30, 'current':0},
'burger':{'max':30, 'current':0},
'steak':{'max':30, 'current':0},

	}

	this.multipliers = [1, 1.2, 1.5]

this.idToIndex = function(id){
var keys=['a','b','c'];
for (var i = 0; i<3; i++){
	if(id[0]==keys[i]){
		var x = i;
	}
var y = parseInt(id.slice(1).)

return [x,y];

}

this.requestBoxStatus = function(id){
	//provides information to interface.js
var coord = this.idToIndex(id)
var x = coord[0];
var y = coord[1];
var item = this.contents[x][y];
var data = []
data.push(this.determineColor(item));
data.push(item.name);
data.push(item.side);
return data;
}

this.restockItem = function(item){

var x = this.currentStock[item].max - this.currentStock[item].current;
var y = kitchen.freezer.remove(item, x);
if (y>0){
	this.currentStock[item].current+=y;
	return true;
}
else{
	return false;
}
}

this.addMaster=function(stock, grillBox){
	//for use from interface; chefs should use add_item_position or add_random
	var coord = this.idToIndex(grillBox)
	var x = coord[0];
	var y = coord[1];
	return add_item_position(x, y, item);



}

this.cleanBoxMaster = function(id){
	var coord = this.idToIndex(grillBox)
	var x = coord[0];
	var y = coord[1];
	this.grillBoxConditions[x][y]=0


}

this.removeMaster=function(id){
	var coord = this.idToIndex(grillBox)
	var x = coord[0];
	var y = coord[1];
	var item = remove_position(x,y);
	if(item !== false){

	kitchen.hotWindow.addItem(item);
	return 'success';

	}
	else{
		return 'nothing there';
	}


}






	this.time_modify_grill = function() {

		if (this.temperature + 1 <= this.max_temperature) {
			this.temperature += 1;
		} else {
			this.temperature -= 1;
		}

		this.dirt += this.items_number * 0.05;

	}

	this.set_max_Temperature = function(temp) {

		this.max_temperature = temp;
	}
	this.MakeEmptyGrill = function() {
		for (i = 0; i < this.contents.length; i++) {

			for (z = 0; z < size; z++) {
				this.contents[i].push('_');
				this.grillBoxConditions[i].push(0);

			}
		}
	}


	this.cook_items = function() {

		for (i = 0; i < contents.length; i++) {
			heat = this.temperature * multipliers[i]
			for (z = 0; z < contents[i].length; z++) {
				this.contents[i][z].complete += heat - (this.dirt / 100);
			}

		}


	}

	this.add_item_position = function(x, y, item) {
		if (this.contents[x][y] == '_') {
			this.contents[x][y] = item
			return true
		} else {
			return false
		}
	}

this.remove_position = function(x,y){
	if (this.contents[x][y] == '_') {

		return false;

	else{
		var thing = this.contents[x][y]
		this.contents[x][y]== '_';
		return thing;
	}
}

	this.add_item_random = function(x, y, item) {

		for (i = 0; i < this.contents.length; i++) {

			for (z = 0; z < this.contents[i].length; z++) {
				if (this.contents[i][z] == '_') {
					this.contents[i][z] == item;
					return true;
				}

			}

		}

		return false;

	}



}
