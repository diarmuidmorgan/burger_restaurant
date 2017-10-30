
function FoodOrder() {
    // Constructor for a food order
    this.main = randomSelection(menu.main)
    this.side = randomSelection(menu.side)
    this.sauce = randomSelection(menu.sauce)
    this.drink = randomSelection(menu.drink)
    this.test = Object.keys(menu.main)

    // Function to randomly select an item from the menu
    function randomSelection(menuItem) {
        var props = Object.getOwnPropertyNames(menuItem)
        return menuItem[props[props.length * Math.random() << 0]];
    };

}

var menu = {
    main: {
        'JDBURGER': {
            'PRICE': 5.90,
            'GRILLED': true,
        },
        'MAPLEBURGER': {
            'PRICE': 6.40,
            'GRILLED': true,
        },
        'MONSTERBURGER': {
            'PRICE': 9.90,
            'GRILLED': true,
        },
        'RIBEYE': {
            'PRICE': 6.40,
            'GRILLED': true,
        }
    },
    side: {
        'CHIPS': {
            'PRICE': 4.00,
            'FRIED': true,
        },
        'RINGS': {
            PRICE: 6.50,
            FRIED: true,
        },
        'SALAD': {
            PRICE: 5.50,
        },
    },
    sauce: {
        'KETCHUP': {
            'PRICE': 2.00,
        },
        'HOTSAUCE': {
            'PRICE': 3.50,
        },

        'CHIPOTLE': {
            'PRICE': 4.00,
        },
    },
    drink: {
        'COKE': {
            'PRICE': 3.50,
            'COLD': true,
        },
        'WATER': {
            'PRICE': 2.50,
            'COLD': true,
        },
        'COFFEE': {
            'PRICE': 3.00,
            'HOT': true,
        },
    }
}