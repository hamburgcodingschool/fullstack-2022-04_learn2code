
// block scope variable
let x = 10;
// global variable
var y = 100;
// constant variables
// To use for values which don't change in code (e.g. name of the bot)
// To use for mathematical constants
const z = 1000;
const PI = 3.14;

x = x / 100; // "overwriting" or "reassigning"
y = y / 100; // "overwriting" or "reassigning"
z = z / 100; // we cannot do this - compile error.

console.log("The value of x " + x);
console.log("The value of y " + y);