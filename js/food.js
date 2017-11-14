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

    // Add a random side if previous selection failed.
    if (this.items.length == 0){
        this.items.push(randomSelection(menu.side))
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
            "COMPONENTS": ["bun", "pattie"],
        },
        "MAPLEBURGER": {
            "NAME": 'Maple Burger',
            "PRICE": 6.40,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 42,
            "COMPONENTS": ["bun", "pattie"],
        },
        "MONSTERBURGER": {
            "NAME": "Monster Burger",
            "PRICE": 9.90,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 112,
            "COMPONENTS": ["bun", "pattie"],
        },
        "RIBEYE": {
            "NAME": "Ribeye",
            "PRICE": 6.40,
            "GRILLED": true,
            "TEMP": 200,
            "TIME": 112,
            "COMPONENTS": ["bun", "pattie"],
        }
    },
    "side": {
        "CHIPS": {
            "NAME": "Chips",
            "PRICE": 4.00,
            "FRIED": true,
            "TEMP": 176,
            "TIME": 180,
            "COMPONENTS": ["fries"],

        },
        "RINGS": {
            "NAME": "Onion Rings",
            "PRICE": 6.50,
            "FRIED": true,
            "TEMP": 176,
            "TIME": 180,
            "COMPONENTS": ["onionRings"],
        },
        "SALAD": {
            "NAME": "Salad",
            "PRICE": 5.50,
            "COMPONENTS": ["salad"]
        },
    },
    "sauce": {
        "KETCHUP": {
            "NAME": "Ketchup",
            "PRICE": 2.00,
            "COMPONENTS": ["ketchup"]
        },
        "HOTSAUCE": {
            "NAME": "Hot Sauce",
            "PRICE": 3.50,
            "COMPONENTS": ["hotSauce"]
        },

        "CHIPOTLE": {
            "NAME": "Chipotle",
            "PRICE": 4.00,
            "COMPONENTS": ["chipotle"]
        },
    },
    "drink": {
        "COKE": {
            "NAME": "Coke",
            "PRICE": 3.50,
            "COLD": true,
            "TIME": 5,
            "COMPONENTS": ["cokeMix", "cup", "ice"],
        },
        "WATER": {
            "NAME": "Mineral Water",
            "PRICE": 2.50,
            "COLD": true,
            "TIME": 5,
            "COMPONENTS": ["bottleWater"],
        },
        "COFFEE": {
            "NAME": "Coffee",
            "PRICE": 3.00,
            "HOT": true,
            "TIME": 5,
            "COMPONENTS": ["coffee", "cup"],
        },
    }
}

var components = {
    "cokeMix": {
        "COSTPRICE": 0.1,
        "LOCATION": "drinkDispenser",
    },
    "bottleWater": {
        "COSTPRICE": 0.1,
        "LOCATION": "fridge",
    },
    "coffee": {
        "COSTPRICE": 0.1,
        "LOCATION": "cupboard",
    },
    "cup": {
        "COSTPRICE": 0.1,
        "LOCATION": "cupboard",
    },
    "fries": {
        "COSTPRICE": 0.2,
        "LOCATION": "freezer",
    },
    "onionRings": {
        "COSTPRICE": 0.3,
        "LOCATION": "freezer",
    },
    "salad": {
        "COSTPRICE": 0.3,
        "LOCATION": "fridge",
    },
    "bun": {
        "COSTPRICE": 0.05,
        "LOCATION": "cupboard",
    },
    "pattie": {
        "COSTPRICE": 0.1,
        "LOCATION": "freezer",
    },
    "ketchup": {
        "COSTPRICE": 0.1,
        "LOCATION": "cupboard",
    },
    "hotSauce": {
        "COSTPRICE": 0.1,
        "LOCATION": "cupboard",
    },
    "chipotle": {
        "COSTPRICE": 0.2,
        "LOCATION": "cupboard",
    }
}
