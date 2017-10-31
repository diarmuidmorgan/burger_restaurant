function renderOrder(order) {
    // Function to output the order as HTML
    // Currently not clearing between orders
    receiptBox = document.getElementById('receiptBox')
    for (item in order.items) {
        receiptBox.insertAdjacentHTML('beforeend', order.items[item].NAME + order.items[item].PRICE + '<br>')
    }
    
    /*
    receiptBox.innerHTML = order.main.NAME + ": " + order.main.PRICE + "<br>" +
        order.side.NAME + ": " + order.side.PRICE + "<br>" +
        order.sauce.NAME + ": " + order.sauce.PRICE + "<br>" +
        order.drink.NAME + ": " + order.drink.PRICE + "<br>" +
        "TOTAL: " + order.orderTotal + "<br>" +
        "<br><br>"
    */
}


function renderStatistics() {
    // Function to add persistant statistics
    var debug = document.getElementById('debug');
    debug.innerHTML = 'Net earning: ' + burgerTown.netEarning + '<br>';
    debug.insertAdjacentHTML('beforeend', 'Walkouts: ' + burgerTown.customerWalkouts + '<br>');
    debug.insertAdjacentHTML('beforeend', 'Queue length: ' + burgerTown.queue.length + '<br>');
    console.log(burgerTown.queue[0].order.items)
}
