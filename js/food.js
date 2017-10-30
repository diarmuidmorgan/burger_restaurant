
function FoodOrder() {    
    // Constructor for a food order
    this.main = randomSelection(menu.main)
    this.side = randomSelection(menu.side)
    this.sauce = randomSelection(menu.sauce)
    this.drink = randomSelection(menu.drink)
    
    this.orderTotal = this.main.PRICE + this.side.PRICE + this.sauce.PRICE + this.drink.PRICE
    
    this.completed = false

    // Function to randomly select an item from the menu
    function randomSelection(menuItem) {
        var props = Object.getOwnPropertyNames(menuItem)
        return menuItem[props[props.length * Math.random() << 0]];
    };

}

var menu = {
    main: {
        'JDBURGER': {
            'NAME': 'JD Burger',
            'PRICE': 5.90,
            'GRILLED': true,
        },
        'MAPLEBURGER': {
            'NAME': 'Maple Burger',
            'PRICE': 6.40,
            'GRILLED': true,
        },
        'MONSTERBURGER': {
            'NAME': 'Monster Burger',
            'PRICE': 9.90,
            'GRILLED': true,
        },
        'RIBEYE': {
            'NAME': 'Ribeye',
            'PRICE': 6.40,
            'GRILLED': true,
        }
    },
    side: {
        'CHIPS': {
            'NAME': 'Chips',
            'PRICE': 4.00,
            'FRIED': true,
        },
        'RINGS': {
            NAME: 'Onion Rings',
            PRICE: 6.50,
            FRIED: true,
        },
        'SALAD': {
            NAME: 'Salad',
            PRICE: 5.50,
        },
    },
    sauce: {
        'KETCHUP': {
            'NAME': 'Ketchup',
            'PRICE': 2.00,
        },
        'HOTSAUCE': {
            'NAME': 'Hot Sauce',
            'PRICE': 3.50,
        },

        'CHIPOTLE': {
            'NAME': 'Chipotle',
            'PRICE': 4.00,
        },
    },
    drink: {
        'COKE': {
            'NAME': 'Coke',
            'PRICE': 3.50,
            'COLD': true,
        },
        'WATER': {
            'NAME': 'Mineral Water',
            'PRICE': 2.50,
            'COLD': true,
        },
        'COFFEE': {
            'NAME': 'Coffee',
            'PRICE': 3.00,
            'HOT': true,
        },
    }
}