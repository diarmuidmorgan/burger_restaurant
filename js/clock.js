function Clock() {
	// Main clock class for the restaurant
	var time = 0
	var minute = 0
	var hour = 0
	var day = 0
	var week = 0
	var month = 0
	var year = 0

	this.increment = function() {
		time = time + (GAME_SPEED / 1000);
		document.getElementById('clockDisplay').innerHTML = time.toString();

		// Calls the game loop every tick
		//Clock.incrementTime()
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

	this.incrementTime = function() {
		if (time == 59) {
			time = 0
			minutes += 1
		} else {
			if (minute == 59) {
				minute = 0
				hour += 1
			} else {
				if (hour == 23) {
					hour = 0
					day += 1
				} else {
					if (day == 29) {
						day = 0
						month += 1
					} else {
						if (month == 11) {
							month = 0
							year += 1
						}
					}
				}
			}
		}
	}
}