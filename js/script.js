function Restaurant() {
	// Constructor for the restaurant class
	this.clock = new Clock;
	this.time = {
		"minute": 0,
		"hour": 0,
		"day": 0,
		"month": 0,
		"year": 0,
	}

	this.messageBox = new messageBox()

	this.netEarning = 0;
	this.bankBalance = OPENING_BALANCE;

	this.customerWalkouts = 0;
	this.customerServed = 0;

	this.queue = [];
	this.staff = [];

	this.cupboard = components;
}

var burgerTown = new Restaurant();