function Clock() {
	// Main clock class for the restaurant
	var time = 0
	// Clock is milliseconds/seconds/minutes/hours/days
	var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	this.dayOfWeek = 0

	this.increment = function() {
		time += 1
		// Calls the game loop every tick
		incrementTime()
		renderStatistics();
		renderStaffStats(burgerTown.staff);
		gameLoop()
		renderMessageLog()
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
		// Granular clock
		if (time == 59) {
			time = 0;
			burgerTown.clockTime[0] += 1;
			if (burgerTown.clockTime[0] == 59) {
				// Increment minutes
				burgerTown.clockTime[0] = 0;
				burgerTown.clockTime[1] += 1;
				if (burgerTown.clockTime[1] == 59) {
					// Increment hours
					burgerTown.clockTime[1] = 0;
					burgerTown.clockTime[2] += 1;
					incrementHoursWorked()
					if (burgerTown.clockTime[2] >= 24) {
						// Increment days
						this.dayOfWeek += 1
						if (this.dayOfWeek >= 7) {
							// Track days of week
							this.dayOfWeek == 0
						}
						burgerTown.clockTime[2] = 0;
						burgerTown.clockTime[3] += 1;
					}
				}
			}
		}

	}

	this.produceTimeString = function(time){
		// Returns 24 hour time
		var timeString = '';

		if (time[2] < 10) {
			timeString+='0' + time[2].toString();
		} else {
			timeString+=time[2].toString();
		};

		timeString += ':';
		if (time[1] < 10) {
			timeString+='0' + time[1].toString();
		} else {
			timeString+=time[1].toString();
		};

		timeString+=':'
		if (time[0] < 10) {
			timeString+='0' + time[0].toString();
		} else {
			timeString+=time[0].toString();
		};

		return timeString;
	}

}
