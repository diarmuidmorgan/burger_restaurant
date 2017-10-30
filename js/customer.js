function Customer(){
    this.order = new FoodOrder()
    
    
    // Very rudimentary ordering system - not sure how to update the HTML elegantly...
    burgerTown.netEarning += this.order.orderTotal;
    document.getElementById('earnings').innerHTML = burgerTown.netEarning
    
    document.getElementById('debug').innerHTML = JSON.stringify(this.order)
}