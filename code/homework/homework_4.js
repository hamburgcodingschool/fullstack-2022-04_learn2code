readlinesync = require("readline-sync");

// // Hey! Tell me a number.
// // > 7
// // Great! Now give me a word.
// // > la

// number1 = 0

// number1 = Number(readlinesync.question("Hey! Tell me a number.\n"))
// word = readlinesync.question("Great! Now give me a word.\n")
// song = ""

// for (i = 1; i <= number1; i+=1) {
//   song += word
// }


number = 77

input = Number(readlinesync.question("Guess my secret number:\n"))
console.log(typeof(input))
counter = 1

while (input !== number) {
  counter +=1
  if (input < number) {
    input = Number(readlinesync.question("Too small.\n"))
    console.log(typeof(input))
  } else if (input > number) {
    input = Number(readlinesync.question("Too big.\n"))
    console.log(typeof(input))  
  }
}
console.log(`Congrats! The number is ${input}! And it took your dumb ass "only" ${counter} times!`)

// console.log(song)