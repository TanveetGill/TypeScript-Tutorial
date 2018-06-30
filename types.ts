// define types using colon :

var n : Number = 1;

n = 'rob';

// assigning n to a String will throw us this error but will still compile the JS file because it is not a critical error
// types.ts(5,1): error TS2322: Type '"rob"' is not assignable to type 'Number'.
// We could use Any like this var n : Any = 1;
// This supports Any type

// BOOLEANS
var isWinter : Boolean = false;
isWinter = 123;

var count : Number = 5;
var namesss : String = "Brian";

let names: String[] = ["Brian", "John", "Amy"];

// let namesNumbers: Any[] = ["Brian", "John", "Amy", 5];

// Strings/Keys
enum Starks {Jon,Bran,Eddard,Catlyn};

var cat : Starks = Starks.Catlyn;

function getName() : String{
  return "hello";
}

interface Stark {
  name: String;
  // adding the ? makes this parameter optional
  age?: Number;
}

// Below we reference the interface in the parameters
function printName(stark : Stark) {
    console.log(stark.name);
}

// Understanding errors
printName({name: "Eddard"});
// We need to define interfaces in typescript to act as a blueprint for finding types on objects, ex label below does not exist and typescript alone wont tell you the error
// See defined interface above
printName({label:"Joe"});
