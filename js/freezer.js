function freezer(capacity){

this.stock = {'chips': {'temp':0,
'quantity':0,
},
'burgers':{'temp':0, 'quantity':0},
'chicken':{'temp':0, 'quantity':0}
}

this.temperature = 0;


this.remove = function(item,x){

var amount = this.stock[item].quantity
if(x<amount){
  this.stock[item].quantity=amount-x
  return x;
}
else{
this.stock[item].quantity = 0
return amount;

}



}







}
