// Typescript classes

class Stark {
  // Classes can have default properties
  name: String = "Brandon";
  // Classes can have static properties
  static castle: String = "Winterfell";
  saying?: String;

  // Another way to give it a default property
  constructor(){
    this.saying = "Winterfell!";
  }

  // Methods
  hello(person: String){
    console.log("Hello, " + person);
  }
}

var ned = new Stark();
ned.saying = "Winter is Coming!";
console.log(Stark.castle);
ned.hello('Robert');
