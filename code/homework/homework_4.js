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



// console.log(song)

function getInput(){
  return Number(readlinesync.question("Guess my secret number:\n"));
}

// Plays a game with the user
// Returns: a number representing the number of guesses
function playGuessingGame() {
  // hardcoding
  // number = 77

  // random number
  number = Math.round(Math.random()*100);
  console.log(number);

  input = getInput();
  console.log(typeof (input))
  counter = 1

  while (input !== number) {
    counter += 1
    if (input < number) {
      input = Number(readlinesync.question("Too small.\n"))
      console.log(typeof (input))
    } else if (input > number) {
      input = Number(readlinesync.question("Too big.\n"))
      console.log(typeof (input))
    }
  }
  return counter;
}

let numberOfAttempts1 = playGuessingGame();
console.log(`Congrats! It took your dumb ass "only" ${numberOfAttempts1} times!`)

let numberOfAttempts2 = playGuessingGame();
console.log(`Congrats! It took your dumb ass "only" ${numberOfAttempts2} times!`)

let numberOfAttempts3 = playGuessingGame();
console.log(`Congrats! It took your dumb ass "only" ${numberOfAttempts3} times!`)


