readlinesync = require("readline-sync");

// botName = "Lil' Bot"
// birthYear = 2021

// console.log(`Hey there! My name is ${botName}.\nI was born in ${birthYear}.`)

userName = readlinesync.question("So i hate talking to strangers.\nWhats your name?\n");
console.log(`Nice ti meet you ${userName}!`)

userAge = readlinesync.question(`I know this may not be nice to ask, ${userName}, but I am curious:\nWhat is your age?\n`);
currentYear = new Date().getFullYear()
userBirthYear = currentYear - userAge
console.log(`Oh wow! So you were born in ${userBirthYear}!`)

console.log(`Hey, ${userName}, let's play a guessing game. Are you ready? Press Enter!`)
console.log(`So, ${userName}, think about a number and write it down on paper! When ready, press Enter.`)
remainder3 = Number(readlinesync.question(`Ok. So if you divide your number by 3, what is the remainder?\n`))
remainder5 = Number(readlinesync.question(`Nice! If you divide your number by 5, what is the remainder?\n`))
remainder7 = Number(readlinesync.question(`One more! If you divide your number by 7, what is the remainder?\n`))

// console.log(typeof(remainder3))
// console.log(typeof(remainder5))
// console.log(typeof(remainder7))
console.log(remainder3)
console.log(remainder5)
console.log(remainder7)

secretNumber = Number((remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105)
console.log(typeof(secretNumber))
console.log(`HAHA! Your secret number is ${secretNumber}`)