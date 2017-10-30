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
