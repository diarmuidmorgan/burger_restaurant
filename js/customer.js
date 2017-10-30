function Customer() {
    // Constructor for a customer
    // Should be able to customise order more, e.g. omitting or ordering multiples
    this.order = new FoodOrder()

    displayOrder(this.order)

}

function displayOrder(order) {
    // Function to output the order as HTML
    burgerTown.netEarning += order.orderTotal;
    document.getElementById('earnings').innerHTML = burgerTown.netEarning
    
    receiptBox = document.getElementById('receiptBox')
    receiptBox.innerHTML = order.main.NAME + ": " + order.main.PRICE + "<br>"
    + order.side.NAME + ": " + order.side.PRICE + "<br>"
    + order.sauce.NAME + ": " + order.sauce.PRICE + "<br>"
    + order.drink.NAME + ": " + order.drink.PRICE + "<br>"
    + "TOTAL: " + order.orderTotal + "<br>"
    + "<br><br>"
}
