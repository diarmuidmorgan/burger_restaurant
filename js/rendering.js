function renderOrder(order) {
    // Function to output the order as HTML
    receiptBox = document.getElementById('receiptBox')
    receiptBox.innerHTML = order.main.NAME + ": " + order.main.PRICE + "<br>" +
        order.side.NAME + ": " + order.side.PRICE + "<br>" +
        order.sauce.NAME + ": " + order.sauce.PRICE + "<br>" +
        order.drink.NAME + ": " + order.drink.PRICE + "<br>" +
        "TOTAL: " + order.orderTotal + "<br>" +
        "<br><br>"
}

function renderStatistics() {
    var debug = document.getElementById('debug');
    debug.innerHTML = 'Net earning: ' + burgerTown.netEarning + '<br>';
    debug.insertAdjacentHTML('beforeend', 'Walkouts: ' + burgerTown.angryCustomers + '<br>');
    debug.insertAdjacentHTML('beforeend', 'Queue length: ' + burgerTown.queue.length + '<br>');
}
