function Customer() {
    // Constructor for a customer
    // Should be able to customise order more, e.g. omitting or ordering multiples
    this.anger = 60
    this.hunger = 4
    this.order = new FoodOrder(this.hunger)
    renderOrder(this.order)

}
