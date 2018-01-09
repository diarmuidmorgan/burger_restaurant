function Restaurant() {
	// Constructor for the restaurant class
	this.clock = new Clock;

	this.netEarning = 0;
	this.bankBalance = 0;

	this.customerWalkouts = 0;
	this.customerServed = 0;

	this.queue = [];
	this.staff = [];

	this.cupboard = components;
}

var burgerTown = new Restaurant();