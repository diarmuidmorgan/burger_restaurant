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
		var messageBox = document.getElementById('messageBox');
		debug.innerHTML = ""
		debug.insertAdjacentHTML('beforeend', 'Minute: ' + burgerTown.time.minute + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Hour: ' + burgerTown.time.hour + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Day: ' + burgerTown.time.day + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Month: ' + burgerTown.time.month + '<br><br>');
		debug.insertAdjacentHTML('beforeend', 'Walkouts: ' + burgerTown.customerWalkouts + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Queue length: ' + burgerTown.queue.length + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Employees: ' + burgerTown.staff.length + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Bank balance: ' + burgerTown.bankBalance + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Net earning: ' + burgerTown.netEarning + '<br>');

		messageBox.innerHTML = burgerTown.messageBox.messages;
	}
}

function messageBox() {
	// Keeps a list of the most recent messages
	this.messages = []

	this.writeMessage = function(message) {
		this.messages += message + "<br>"
	}

}