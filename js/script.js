function Queue() {
    //basic, inefficient, queue function
    this.list = [];
    this.addTo = function (x) {

        this.list.push(x);
    };
    this.next = function () {
        var x = this.list[0];
        var new_arr = []
        for (i = 1; i < this.list.length; i++) {
            new_arr.push(this.list[i]);
        }
        this.list = new_arr;
        return x;
    };
}

function Clock() {
    //basic clock class for the restaurant
    var time = 0


    this.increment = function () {
        time = time + (GAME_SPEED / 1000);
        document.getElementById('clockDisplay').innerHTML = time.toString();

        // Calls the game loop every tick
        gameLoop()
    };

    this.stop = function () {
        clearInterval(this.c);
    }
    this.start = function () {
        clearInterval(this.c)
        this.c = setInterval(this.increment, GAME_SPEED);
    }

    this.setSpeed = function (x) {
      GAME_SPEED = x;
}}


function Restaurant() {
    // Constructor for the restaurant class
    this.clock = new Clock;
    this.ticketqueue = new Queue;
    this.ticketmachine = new TicketGenerator;

    this.netEarning = 0;
    this.bankBalance = 0;

    this.customerWalkouts = 0;
    this.customerServed = 0;

    this.queue = [];
    this.staff = [];

    this.cupboard = components;

    while (this.clock.time < 1000) {
        setTimeout(console.log(this.ticketmachine.next()), 300)
    }
}

var burgerTown = new Restaurant();
