// Typescript classes
var Stark = /** @class */ (function () {
    // Another way to give it a default property
    function Stark() {
        // Classes can have default properties
        this.name = "Brandon";
        this.saying = "Winterfell!";
    }
    // Methods
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    // Classes can have static properties
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is Coming!";
console.log(Stark.castle);
ned.hello('Robert');
