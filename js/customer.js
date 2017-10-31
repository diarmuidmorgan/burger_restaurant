function Customer() {
    // Constructor for a customer
    // Should be able to customise order more, e.g. omitting or ordering multiples

    // Returns a random number biased towards min
    function biasedRandom(min, max) {
        return Math.round(max / (Math.random() * max + min));
    }

    this.anger = 60
    this.hunger = biasedRandom(20,100) + 1
    this.order = new FoodOrder(this.hunger)





}
