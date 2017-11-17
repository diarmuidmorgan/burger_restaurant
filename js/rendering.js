function renderOrder(order) {
    // Function to output the order as HTML
    // Currently not clearing between orders
    var mostRecentOrder = document.getElementById('mostRecentOrder')
    var HTML = ''
    for (item in order.items) {
        HTML += order.items[item].NAME + " " + order.items[item].PRICE + '<br>'
    }
    HTML += '<br>TOTAL: ' + order.orderTotal
    mostRecentOrder.innerHTML = HTML
}

function renderStockCupboard(cupboard) {
    // Renders the contents of the stock cupboard as HTML
    var stockListing = document.getElementById('stockListing')
    var HTML = ''

    for (item in cupboard) {
        HTML += cupboard[item].NAME + " " + cupboard[item].QUANTITY + '<br>'
    }

    stockListing.innerHTML = HTML
}


function renderStatistics() {
    if (DEBUG_MODE == 1) {
        var debug = document.getElementById('debug');
        debug.innerHTML = 'Net earning: ' + burgerTown.netEarning + '<br>';
        debug.insertAdjacentHTML('beforeend', 'Walkouts: ' + burgerTown.customerWalkouts + '<br>');
        debug.insertAdjacentHTML('beforeend', 'Queue length: ' + burgerTown.queue.length + '<br>');
        debug.insertAdjacentHTML('beforeend', 'Employees: ' + burgerTown.staff.length + '<br>');
        debug.insertAdjacentHTML('beforeend', 'Bank balance: ' + burgerTown.NetEarnings + '<br>');
 //       console.log(burgerTown.cupboard) // Contents of stock cupboard
        console.log(burgerTown.queue[burgerTown.queue.length - 1]); // Most recent customer
    }

}
