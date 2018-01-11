function gameLoop() {
	// Runs through the customers and checks their status
	for (var customer in burgerTown.queue) {

		// Looks at whether the order is fulfilled, makes them angry if it's not.
		if (burgerTown.queue[customer].order.completion != 100) {
			burgerTown.queue[customer].anger += 0.7;
		}

		// Customers walk out without paying if they're too angry
		if (burgerTown.queue[customer].anger >= 90) {
			burgerTown.queue.splice(customer, 1)
			burgerTown.customerWalkouts += 1
			burgerTown.messageBox.writeMessage("A customer got too irate and walked out.")
		}
	}

	for (var staffMember in burgerTown.staff) {
		if (burgerTown.queue.length > 0) {
			switch (burgerTown.staff[staffMember].constructor.name) {

				case "Chef":
					// Cook food
					for (x in burgerTown.queue) {
						if (burgerTown.queue[x].order.completion < 100) {
							burgerTown.staff[staffMember].cookOrder(burgerTown.queue[x].order);
							burgerTown.staff[staffMember].editFatigue(0.01);
							break;
						}
					}
					break;

				case "Manager":
					// Pay wages
					if (burgerTown.time.day % 6 == 0) {
						burgerTown.staff[staffMember].payWages()
					};
					break;

				case "Cashier":
					// Serve food
					burgerTown.staff[staffMember].checkCompletion(burgerTown.queue[0]);
					burgerTown.staff[staffMember].editFatigue(0.01);
					break;
			}
		} else {
			break;
		}
	}

	// Random chance for a customer to arrive each tick
	if (Math.random() <= CUSTOMER_PROB) {
		burgerTown.messageBox.writeMessage("A customer has arrived.")
		burgerTown.queue.push(new Customer());
	}

	// Redrawing other HTML stuff
	if (burgerTown.queue.length > 0) {
		renderOrder(burgerTown.queue[burgerTown.queue.length - 1].order) // The most recent order
	}
	renderStockCupboard(burgerTown.cupboard) // The stock cupboard
}