function FoodOrder(hunger) {
    // Constructor for ordering food
    this.items = []
    this.orderSize = hunger
    this.orderTotal = 0

    // Function to provide random number based on a seed.
    var seededRandom = function (x) {
        return x * Math.random() << 0;
    };
    
    // Selects semi-randomised number of items from each section of menu.
    for (var i = 0; i < seededRandom(this.orderSize); i++) {
        this.items.push(randomSelection(menu.main))
    }

    for (var i = 0; i < seededRandom(this.orderSize); i++) {
        this.items.push(randomSelection(menu.side))
    }

    for (var i = 0; i < seededRandom(this.orderSize); i++) {
        this.items.push(randomSelection(menu.sauce))
    }

    for (var i = 0; i < seededRandom(this.orderSize); i++) {
        this.items.push(randomSelection(menu.drink))
    }

    // Totals the price of all items
    for (item in this.items) {
        this.orderTotal += this.items[item].PRICE
    }


    // Orders should eventually be completed in increments
    // according to skill of cook, with 100 being completed
    this.completion = 0

    // Function to randomly select an item from the menu
    function randomSelection(menuItem) {
        var props = Object.getOwnPropertyNames(menuItem)
        return menuItem[props[seededRandom(props.length)]];
    };

}

var menu = {
    "main": {
        "JDBURGER": {
            "NAME": "JD Burger",
            "PRICE": 5.90,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 42,
        },
        "MAPLEBURGER": {
            "NAME": 'Maple Burger',
            "PRICE": 6.40,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 42,
        },
        "MONSTERBURGER": {
            "NAME": "Monster Burger",
            "PRICE": 9.90,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 112,
        },
        "RIBEYE": {
            "NAME": "Ribeye",
            "PRICE": 6.40,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 112,
        }
    },
    "side": {
        "CHIPS": {
            "NAME": "Chips",
            "PRICE": 4.00,
            "FRIED": true,
            "TEMP": 176,
            "TIME": 180,

        },
        "RINGS": {
            "NAME": "Onion Rings",
            "PRICE": 6.50,
            "FRIED": true,
            "TEMP": 176,
            "TIME": 180,
        },
        "SALAD": {
            "NAME": "Salad",
            "PRICE": 5.50,
        },
    },
    "sauce": {
        "KETCHUP": {
            "NAME": "Ketchup",
            "PRICE": 2.00,
        },
        "HOTSAUCE": {
            "NAME": "Hot Sauce",
            "PRICE": 3.50,
        },

        "CHIPOTLE": {
            "NAME": "Chipotle",
            "PRICE": 4.00,
        },
    },
    "drink": {
        "COKE": {
            "NAME": "Coke",
            "PRICE": 3.50,
            "COLD": true,
            "TIME": 5,
        },
        "WATER": {
            "NAME": "Mineral Water",
            "PRICE": 2.50,
            "COLD": true,
            "TIME": 5,
        },
        "COFFEE": {
            "NAME": "Coffee",
            "PRICE": 3.00,
            "HOT": true,
            "TIME": 5,
        },
    }
}
