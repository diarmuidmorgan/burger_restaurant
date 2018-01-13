function Clock() {
	//basic clock class for the restaurant
	var time = 0
	clockTime=[16, 0, 0]


	this.increment = function() {
		time = time + 1;

		this.clockTime[2]+=1
		if (this.clockTime[2]>=60){
			this.clockTime[2]=0;
			this.clockTime[1]+=1;
			if (this.clockTime[1]>=60){
				this.clockTime[1]=0;
				this.clockTime[0]+=1;
				if (this.clockTime[0]>=24){
					this.clockTime[0]=0;
				}

			}

		}
		document.getElementById('clockDisplay').innerHTML = clockTime[0].toString()+':'+clockTime[1].toString()+':'+clockTime[2].toString();
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
	this.time = {
		"minute": 0,
		"hour": 0,
		"day": 1,
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
