function Clock() {
	//basic clock class for the restaurant
	var time = 0

	this.increment = function() {
		time = time + (GAME_SPEED / 1000);
		document.getElementById('clockDisplay').innerHTML = time.toString();

		// Calls the game loop every tick
		gameLoop()
	};

	this.stop = function() {
		clearInterval(this.c);
	}
	this.start = function() {
		clearInterval(this.c)
		this.c = setInterval(this.increment, GAME_SPEED);
	}

	this.setSpeed = function(x) {
		GAME_SPEED = x;
	}
}


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