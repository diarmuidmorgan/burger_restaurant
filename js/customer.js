function Customer() {
    // Constructor for a customer
    // Should be able to customise order more, e.g. omitting or ordering multiples
    this.order = new FoodOrder()
    this.anger = 0
    this.hunger = 60
    renderOrder(this.order)

}
