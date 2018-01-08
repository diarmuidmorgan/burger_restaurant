function grill(size){
		//represents the restaurants grill//

		this.temperature = 0;
		this.on = false;
		this.contents = [[],[],[]];
		this.max_temperature=0;
		this.dirt=0
		this.items_number=0

		this.multipliers=[1, 1.2, 1.5]


		this.time_modify_grill = function(){

			if (this.temperature+1<=this.max_temperature){
				this.temperature+=1;
			}
			else{
				this.temperature -=1;
			}

			this.dirt+=this.items_number*0.05;

		}

		this.set_max_Temperature = function(temp){

			this.max_temperature = temp;
		}
		this.MakeEmptyGrill = function(){
			for (i=0;i<this.contents.length; i++){

				for (z=0;z<size;z++){
					this.contents[i].push('_');

				}}}


		this.cook_items = function(){

			for (i=0;i<contents.length;i++){
				heat = this.temperature*multipliers[i]
				for (z=0; z<contents[i].length; z++){
					this.contents[i][z].complete += heat - (this.dirt/100);
			}

			}


		}

		this.add_item_position = function(x,y,item){
			if (contents[x][y]=='_'){
				contents[x][y]=item
				return true
			}
			else{
				return false
			}
}
	this.add_item_random = function(x,y,item){

		for (i=0;<this.contents.length;i++){

			for (z=0;z<this.contents[i].length; z++){
				if (this.contents[i][z]=='_'){
					this.contents[i][z]==item;
					return true;
				}

			}

		}

return false;

}

this.checkGrill()





























}
