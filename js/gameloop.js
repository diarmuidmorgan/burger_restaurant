function gameLoop() {
    // Runs through the customers and checks their status
    for (var customer in burgerTown.queue) {

        // Looks at whether the order is fulfilled, makes them angry if it's not.
        if (burgerTown.queue[customer].order.completed == true) {
            console.log("Order completed")
            burgerTown.netEarning += customer.order.orderTotal;
            burgerTown.queue.splice(customer, 1)
                        burgerTown.customerServed += 1
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
    // Random chance for a customer to arrive each tick
    if (Math.random() >= 0.5) {
        console.log("A customer has arrived.")
        burgerTown.queue.push(new Customer());
    }

    // Redrawing other HTML stuff
    renderStatistics();
}