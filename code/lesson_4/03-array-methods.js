// push

// includes 

// E1. 
// Ask the user for a letter;
// Check if the input is a vowel or a consonant;
readlinesync = require("readline-sync");

letter = readlinesync.question("What is your favourite letter?");
// a A
lowerCaseLetter = letter.toLowerCase();
// a

vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(lowerCaseLetter)){
    console.log(letter + " is vowel");
} else {
    console.log(letter + " is consonant");
}