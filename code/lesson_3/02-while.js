// Loops

// For

// While
readlinesync = require("readline-sync");
age = readlinesync.question("Give me your age:");
count = 0;
while (isNaN(Number(age))){
    console.log(age + " is not a number.")
    count = count + 1;
    console.log("I asked you " + count + " times already!");
    if (count === 3) {
        console.log("I ask you two more times! I am going crazy!");
    }
    if (count === 4) {
        console.log("One more try left...");
    }
    if (count === 5) {
        // something that says "escape the loop"
        break;
    }
    age = readlinesync.question("AGE PLEASE:");
} 

console.log("Thanks for your age");



