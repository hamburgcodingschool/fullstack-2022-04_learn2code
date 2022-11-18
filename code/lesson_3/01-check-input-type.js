readlinesync = require("readline-sync");

userInput = readlinesync.question(" give me something ")
userInputNumber = Number(userInput);
console.log(userInputNumber);
console.log(typeof userInputNumber);

if (isNaN(userInputNumber)){
    console.log("You gave me a string.");
} else {
    console.log("You gave me a number");
}



// console.log(userInput + " is of type " + typeof userInput);
// birthYear = 2022 - userInput;
// console.log(birthYear);
// console.log(typeof birthYear);

// newYear = 2022 + userInput;
// console.log(newYear);
// console.log(typeof newYear);
// takeaway: The type of the user input is IMPORTANT;

