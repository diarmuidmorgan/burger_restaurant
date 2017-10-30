var queue = []

function gameLoop() {
    // Runs through the customers and checks their status
    for (var customer in queue) {

        // Looks at whether the order is fulfilled, makes them angry if it's not.
        if (queue[customer].order.completed == true) {
            console.log("Order completed")
            burgerTown.netEarning += customer.order.orderTotal;
            queue.splice(customer, 1)
        } else {
            queue[customer].anger += 5;
        }

        // Customers walk out without paying if they're too angry
        if (queue[customer].anger >= 80) {
            queue.splice(customer, 1)
            burgerTown.angryCustomers += 1
            console.log("The customer got too irate and walked out.")
        }
    }
    if (Math.random() >= 0.5) {
        console.log("A customer has arrived.")
        queue.push(new Customer());
    }

    // Redrawing other HTML stuff
    document.getElementById('earnings').innerHTML = burgerTown.netEarning
    document.getElementById('angryCustomers').innerHTML = burgerTown.angryCustomers
}
