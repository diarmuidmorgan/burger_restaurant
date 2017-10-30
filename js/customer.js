function Customer(){
    this.order = new FoodOrder()
    
    
    // Very rudimentary ordering system - not sure how to update the HTML elegantly...
    burgerTown.netEarning += this.order.orderTotal;
    console.log(burgerTown.netEarning);
}