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
    var time = 5;
    var speed = 1

    this.time = function () {
        return time;
    }
    this.increment = function () {
        time = time + speed;
        document.getElementById('clockDisplay').innerHTML = time.toString();
    };

    this.stop = function () {
        clearInterval(this.c);
    }
    this.start = function () {
        this.c = setInterval(this.increment, 30);
    }

}

this.setSpeed = function (x) {

    speed = x;
}


function Grill() {
    //grill class
    var temp = 0;
    var mode = 'off';
    this.switch = function () {
        if (mode == 'off') {
            mode = 'on';
        } else {
            mode = 'off'
        }
    }

    this.displayTemp = function () {
        return temp;
    }
};

function Fryer() {
    //fryer class constructor
    var temp = 0;
    var mode = 'off';
    var contents = 'empty';

    this.switch = function () {
        if (mode == 'off') {
            mode = 'on';
        } else {
            mode = 'off'
        }
    }
    this.displayTemp = function () {
        return temp;




    }
};

function Cupboard(x) {
    //cupboard class constructor

    this.contents = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    this.withdraw = function (x) {
        for (i = 0; i < contents.length; i++) {
            if (contents[i].id == x) {
                var v = contents[i];
                contents[i] = [];
                return v;
            }
            return false;
        }
    };



}

function Station(list) {
    //station class constructor

    this.display = function () {

        return 0;


    }



}

function TicketGenerator() {
    //generates tickets for the restaurant
    this.createSeed = function (x) {

        return Math.floor((Math.random() * x) + 1);
    }

    this.ReturnMains = function () {

        var seed = this.createSeed(3);
        return menu.mains[seed].id;

    }
    this.ReturnSides = function () {

        var seed = this.createSeed(2);
        return menu.sides[seed].id;

    }
    this.ReturnSauces = function () {

        var seed = this.createSeed(2);
        return menu.sauces[seed].id;

    }

    this.next = function () {
        var seed = this.createSeed(10);
        if (seed > 2) {
            var ticket = this.ReturnMains() + '_' + this.ReturnSides() + '_' + this.ReturnSauces()

        } else {

            return false;
        }
    }
}


function Restaurant() {

    this.clock = new Clock;
    this.ticketqueue = new Queue;
    this.ticketmachine = new TicketGenerator;
    //this.clock.start();

    while (this.clock.time < 1000) {
        setTimeout(console.log(this.ticketmachine.next()), 300)
    }
}


var burgerTown = new Restaurant();

// Wait for the HTML to load and do some stuff
document.addEventListener("DOMContentLoaded", function (event) {
    var newOrder = new FoodOrder();
    document.getElementById("debug").insertAdjacentHTML('beforeend', JSON.stringify(newOrder));
});
