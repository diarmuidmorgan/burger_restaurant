function gameLoop() {
	// Runs through the customers and checks their status
	for (var customer in burgerTown.queue) {

		// Looks at whether the order is fulfilled, makes them angry if it's not.
		if (burgerTown.queue[customer].order.completion == 100) {
			console.log("Order completed")

		} else {
			burgerTown.queue[customer].anger += 5;
		}

		// Customers walk out without paying if they're too angry
		if (burgerTown.queue[customer].anger >= 80) {
			burgerTown.queue.splice(customer, 1)
			burgerTown.customerWalkouts += 1
			console.log("The customer got too irate and walked out.")
		}
	}

	for (var staffMember in burgerTown.staff) {
		// Increments skill every 60 ticks
		if (staffMember.hours % 60 == 0) {
			staffMember.skill += 0.05;
		}

		staffMember.hours += 1;
		staffMember.hunger += 1;

		if (burgerTown.queue.length > 0) {
			switch (burgerTown.staff[staffMember].constructor.name) {

				case "Chef":
					burgerTown.staff[staffMember].cookOrder(burgerTown.queue[0].order);
					break;

				case "Manager":
					// Do some managing
					break;
				case "Cashier":
					burgerTown.staff[staffmember].checkCompletion(burgerTown.queue[0]);
					break;
			}
		} else {
			break;
		}
	}

	// Random chance for a customer to arrive each tick
	if (Math.random() <= CUSTOMER_PROB) {
		console.log("A customer has arrived.")
		burgerTown.queue.push(new Customer());
	}

	// Redrawing other HTML stuff
	if (burgerTown.queue.length > 0) {
		renderOrder(burgerTown.queue[burgerTown.queue.length - 1].order) // The most recent order
	}
	renderStockCupboard(burgerTown.cupboard) // The stock cupboard
	renderStatistics(); // Miscellaneous information
}