// define types using colon :
var n = 1;
n = 'rob';
// assigning n to a String will throw us this error but will still compile the JS file because it is not a critical error
// types.ts(5,1): error TS2322: Type '"rob"' is not assignable to type 'Number'.
// We could use Any like this var n : Any = 1;
// This supports Any type
// BOOLEANS
var isWinter = false;
isWinter = 123;
var count = 5;
var namesss = "Brian";
var names = ["Brian", "John", "Amy"];
// let namesNumbers: Any[] = ["Brian", "John", "Amy", 5];
// Strings/Keys
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return "hello";
}
// Below we reference the interface in the parameters
function printName(stark) {
    console.log(stark.name);
}
// Understanding errors
printName({ name: "Eddard" });
// We need to define interfaces in typescript to act as a blueprint for finding types on objects, ex label below does not exist and typescript alone wont tell you the error
// See defined interface above
printName({ label: "Joe" });
