// E1. 
// Ask the user for a letter;
// Check if the input is a vowel or a consonant;
readlinesync = require("readline-sync");

letter = readlinesync.question("What is your favourite letter?");
// a A
lowerCaseLetter = letter.toLowerCase();
// a
if (lowerCaseLetter==="a" || lowerCaseLetter==="e" || 
    lowerCaseLetter==="i" || lowerCaseLetter==="o" || 
    lowerCaseLetter==="u") {
        console.log(letter + " is vowel");
    } else {
        console.log(letter + " is consonant");
    }



// E2. 
// Ask the user for a number;
// Check if the number is odd or even; 

// Hint:
// modulo operator %

number = readlinesync.question("Give me a number");
// rest = number % 2;
if (number % 2 === 0){
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}


// E3. 
// Ask the user for their age;
// Calculate their birthYear; Print the following message:
// "You were born in the year: 1982" 
age = readlinesync.question("Give me your age:");

if (isNaN(Number(age))){
    console.log("This is not a number. Please give me your age!")
} else {
    console.log("Thanks for your age");
}

currentYear = 2022;  // this can be a function like
// currentYear = new Date().getFullYear();
birthYear = currentYear - age;
message = "You were born in the year: ";
console.log(message + birthYear);
