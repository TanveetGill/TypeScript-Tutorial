// tsc this file compliles to JS
console.log('Hello World');

// we pass in : String to let the function know the input can only be a string
function hello(string : String) {
  console.log("hello " + string)
}

hello('Tanny');

// passing in number, compiler does not let us compile this as number is not type String
hello(55);

// we get this error
// helloWorld.ts(12,7): error TS2345: Argument of type '55' is not assignable to parameter of type 'String'.