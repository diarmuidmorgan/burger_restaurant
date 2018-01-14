function roundNumber(number) {
	// Rounds numbers to two decimal places
	return Math.round(number * 2) / 2
}

function renderOrder(order) {
	// Function to output the order as HTML
	// Currently not clearing between orders
	var mostRecentOrder = document.getElementById('mostRecentOrder')
	var HTML = ''
	for (var item in order.items) {
		HTML += order.items[item].NAME + " " + order.items[item].PRICE + '<br>'
	}
	HTML += '<br>TOTAL: ' + roundNumber(order.orderTotal)
	mostRecentOrder.innerHTML = HTML
}

function renderStockCupboard(cupboard) {
	// Renders the contents of the stock cupboard as HTML
	var stockListing = document.getElementById('stockListing')
	var HTML = ''

	for (var item in cupboard) {
		HTML += cupboard[item].NAME + " " + cupboard[item].QUANTITY + '<br>'
	}

	stockListing.innerHTML = HTML
}


function renderStatistics() {
	console.log('stuff happening here')
	if (DEBUG_MODE == 1) {
		var debug = document.getElementById('debug');

		debug.innerHTML = ""

		debug.insertAdjacentHTML('beforeend', 'Minute: ' + burgerTown.clock.produceTimeString(burgerTown.clockTime) + '<br>');

		debug.insertAdjacentHTML('beforeend', 'Walkouts: ' + burgerTown.customerWalkouts + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Queue length: ' + burgerTown.queue.length + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Employees: ' + burgerTown.staff.length + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Bank balance: ' + roundNumber(burgerTown.bankBalance) + '<br>');
		debug.insertAdjacentHTML('beforeend', 'Net earning: ' + roundNumber(burgerTown.netEarning) + '<br>');


	}
}

function renderMessageLog() {
	// Draws the message log
	var messageWindow = document.getElementById('messageBox');
	burgerTown.messageBox.displayMessages(messageWindow)
}


function messageBox() {
	// Keeps a list of the most recent messages
	this.messages = []
	var msgString = ""

	this.writeMessage = function(message) {
		// Writes messages to log, keeps it to a certain length
		this.messages.unshift(message + "<br>")
		if (this.messages.length > LOG_LENGTH) {
			this.messages.pop()
		}
	}

	this.displayMessages = function(messageWindow) {
		// Puts messages into string and prints them
		for (var message in this.messages) {
			msgString += this.messages[message]
		}
		messageWindow.innerHTML = msgString;
		msgString = ""
	}
}

function renderStaffStats(staff) {
	var staffStats = document.getElementById('staffStats');
	var staffInfo = ""
	staffStats.innerHTML = ""
	for (var staffMember in staff) {
		staffInfo += "<b>" + staff[staffMember].constructor.name + "</b>";
		staffInfo += " Hunger: " + staff[staffMember].hunger.toPrecision(2);
		staffInfo += " Fatigue: " + staff[staffMember].fatigue.toPrecision(2);
		staffInfo += " Stress: " + staff[staffMember].stress.toPrecision(2);
		staffInfo += " Apathy: " + staff[staffMember].apathy.toPrecision(2);
		staffInfo += "</br>"
		staffStats.insertAdjacentHTML('beforeend', staffInfo);
		staffInfo = ""
	}
}
