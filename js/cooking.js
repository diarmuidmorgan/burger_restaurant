function grill(){
	var arr = []
	var mode = 'off';
	var heat = 0;
	var selectorX = 0;
	var selectorY = 0;
	
	this.makeBigDisplay = function(){
		//show the html/css display of the grill function
		var string = '<h>GRILL CONTENTS</h>'
		for (i=0;i<3;i++){
			string+='<div id="GrillRow'+i.toString()+'" style="display:block">'

			for(z=0;z<10;z++){
				string+='<div class="grillbox" id="grillBox'+i.toString()+z.toString()+'" style="display:inline; width:10%; float:left; cursor:pointer;" onclick="Grill.select('+i.toString()+','+z.toString()+')">'
				string+='<p>'
				if (arr[i][z]==''){
					string+='empty</p><p>...<p>'
				}
				else{
					string+=arr[i][z].name +'</p>'
					string+='<p>'+arr[i][z].centre.toString()+'..'+arr[i][z].sideA.toString()+'..'+arr[i][z].sideB.toString()+'</p>'

				}

				string+='</div>'
				document.getElementById('grillFigure').innerHTML=string;



			}

		string+='</div>'
		}


		return string;


		};


		this.createArr = function(){
			for(i=0;i<3;i++){
				arr.push([]);
				for(z=0;z<10;z++){
					arr[i].push(['']);

				}
			}
		};


	this.returnStock = function(){

		return arr;

	}


	this.addItem = function(item){

		for(i=0;i<3;i++){
			for (z=0;z<3;z++){

				if (arr[i][z]==''){
					arr[i][z]=item;
					return 'success';
					break;

				}

			}


		}
		return 'Full!'


	}

	this.removeItem = function(x, y){

		if (arr[x][y]!=''){
			var c = arr[x][y];
			arr[x][y]=='';
			return c;


		}
		else{
			return 'empty!';

		}


	}


this.cook = function(){

		for(i=0;i<3;i++){
			for (z=0;z<3;z++){

				if (arr[i][z]!=''){
					arr[i][z].cook();
					document.getElementById('grillBox'+i.toString()+z.toString()).innerHTML = '<p>'+arr[i][z].name +'</p><p>'+arr[i][z].centre.toString()+'..'+arr[i][z].sideA.toString()+'..'+arr[i][z].sideB.toString()+'</p>'



				}

			}


		}
}

this.select = function(x,y){

	document.getElementById('grillBox'+selectorX.toString()+selectorY.toString()).style="background-color:black;"
	selectorX = x;
	selectorY = y;
	document.getElementById('grillBox'+x.toString()+y.toString()).style='background-color:red;';
}

}




function grillObject(x, name){
	//grill object constructor
	this.name = name;
	this.selectorX=0;
	this.selectorY=0;
	//e.g burger
	this.sideA = 0;
	this.sideB = 0;
	//how different portions of meat are cooked. There could be
	//a more elegant algorithm for how this is done
	this.centre = 0;
	this.rate = x;
	this.side = 'a'
	this.cook = function(){
		//cook the meat
		if (this.side=='a'){
			this.sideA+=this.rate;
			this.centre+=this.rate/2;

		}
		else{
			this.sideB+=this.rate;
			this.centre+=this.rate/2;


		}


	}
	this.flip = function(){
		//flip the burger
		if (this.side=='a'){
			this.side = 'b';

		}
		else{
			this.side='a';
		}

	}
}

function Fryer() {
    //fryer class constructor
    var temp = 0;
    var mode = 'off';
    var contents = 'empty';

    this.switch = function () {
        if (mode == 'off') {
            mode = 'on';
        } else {
            mode = 'off'
        }
    }
    this.displayTemp = function () {
        return temp;}};

function Cupboard(x) {
    //cupboard class constructor

    this.contents = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    this.withdraw = function (x) {
        for (i = 0; i < contents.length; i++) {
            if (contents[i].id == x) {
                var v = contents[i];
                contents[i] = [];
                return v;
            }
            return false;
        }
    };
}

function Station(list) {
    //station class constructor

    this.display = function () {

        return 0;
    }
}
