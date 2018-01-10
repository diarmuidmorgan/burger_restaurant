function Clock() {
	// Main clock class for the restaurant
	var time = 0

	this.increment = function() {
		time += 1
		// Calls the game loop every tick
		incrementTime()
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

	function incrementTime() {
		if (time == 59) {
			time = 0
			burgerTown.time.minute += 1
		} else {
			if (burgerTown.time.minute == 59) {
				burgerTown.time.minute = 0
				burgerTown.time.hour += 1
				// Increment hours of staff
				incrementHoursWorked()
			} else {
				if (burgerTown.time.hour == 23) {
					burgerTown.time.hour = 0
					burgerTown.time.day += 1
				} else {
					if (burgerTown.time.day == 29) {
						burgerTown.time.day = 0
						burgerTown.time.month += 1
					} else {
						if (burgerTown.time.month == 11) {
							burgerTown.time.month = 0
							burgerTown.time.year += 1
						}
					}
				}
			}
		}
	}
}