function Clock() {
	// Main clock class for the restaurant
	var time = 0

	this.increment = function() {
		time += 1
		// Calls the game loop every tick
		incrementTime()
		renderMessageLog()
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
			renderStatistics();
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
					if (burgerTown.time.day == 30) {
						burgerTown.time.day = 1
						burgerTown.time.month += 1
					} else {
						if (burgerTown.time.month == 12) {
							burgerTown.time.month = 1
							burgerTown.time.year += 1
						}
					}
				}
			}
		}
	}
}