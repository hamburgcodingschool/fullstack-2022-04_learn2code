readlineSync = require('readline-sync');

// E1. // Ask the user for a letter; // Check if the input is a vowel or a consonant;

// letter = readlineSync.question('Tell me a letter from a - z: \n');

// if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {
//   console.log("This letter is a vowel")
// } else {
//   console.log("This letter is a consonant")
// }


//FROM HÜ CORR: WOULD BE BETTER TO DO THE .TOLOWERCASE() ONLY ONCE BY STORING INPUT LATTER INTO A NEW VARIABLE WHICH IS TRANSFORMED TO LOWERCASE AND THEN USE THAT ONE FOR THE LOGIC

// E2. // Ask the user for a number; // Check if the number is odd or even;

// number = readlineSync.question('Tell me a number: \n');

// if (number % 2 === 0) {
//   console.log("This number is even :)")
// } else {
//   console.log("This number is odd")
// }

// E3. // Ask the user for their age; // Calculate their birthYear; Print the following message: // "You were born in the year: 1982"

// age = readlineSync.question("How old are you? \n")
// currentYear = 2022
// FROM HÜ CORR: currentYear = new Date().getFullYear();
// birthYear = currentYear - age

// console.log(`You were born in the year: ${birthYear}`)

// E4. // The length of a month varies from 28 to 31 days. // In this exercise you will create a program that reads the name of a month from the user as a string. // Then your program should display the number of days in that month. // Display “28 or 29 days” for February so that leap years are addressed.

// inputMonth = readlineSync.question("What is your favorite moth of the year? \n")

// bigMonth = ["january", "march", "may", "july", "august", "october", "december"]
// smallMonth = ["april", "june", "september", "november"]

// if (bigMonth.includes(inputMonth.toLowerCase())) {
//   console.log("This month has 31 days.")
// } else if (smallMonth.includes(inputMonth.toLowerCase())) {
//   console.log("This month has 30 days.")
// } else {
//   console.log("This month has 28 or 29 days.")
// }

// E5. // Ask the user for their age;

// Check if the number is in the [0, 120] interval; if NOT, print a message "This cannot be your real age" // Optional: // Check if the input year is a leap year: exactly divisible by 4 and NOT divisible by 100

userAge = readlineSync.question("How old are you? \n")
console.log(typeof(userAge))
userAge

if (userAge > 1 && userAge < 120) {
  if (2022 - userAge % 4 === 0 && 2022 - userAge % 100 !== 0) {
    console.log("Huh you were born in a leap year!")
  } else {
    console.log("Nice!")
  }
} else {
  console.log("This can't be you real age!!")
}