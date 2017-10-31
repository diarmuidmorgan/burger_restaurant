function renderOrder(order) {
    // Function to output the order as HTML
    // Currently not clearing between orders
    receiptBox = document.getElementById('receiptBox')
    for (item in order.items) {
        receiptBox.insertAdjacentHTML('beforeend', order.items[item].NAME + order.items[item].PRICE + '<br>')
    }
}


function renderStatistics() {
    if (DEBUG_MODE == 1) {
    var debug = document.getElementById('debug');
    debug.innerHTML = 'Net earning: ' + burgerTown.netEarning + '<br>';
    debug.insertAdjacentHTML('beforeend', 'Walkouts: ' + burgerTown.customerWalkouts + '<br>');
    debug.insertAdjacentHTML('beforeend', 'Queue length: ' + burgerTown.queue.length + '<br>');        
    }

}