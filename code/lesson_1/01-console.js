
// Exercise 0 - Uncomment and Fix the lines below:
// console.log("My message 4");
// console.log("My message 4");
// console.log("My message 4");


// Exercise 1
// Print your three favourite cities, each city on each line. The output should look like this:
/*
My favourite 3 cities are:
Hamburg
Berlin
Dortmund
*/
// console.log("My favourite 3 cities are:");
// console.log("Hamburg");
// console.log("Berlin");
// console.log("Dortmund");


// Exercise 2
// Make each city be printed between quotes 

/*
My favourite 3 cities are:
"Hamburg"
"Berlin"
"Dortmund"
*/

// let Hamburg = "\"Hamburg\"";
// let Berlin = "\"Berlin\"";
// let Dortmund = "\"Dortmund\"";

// console.log("My favourite 3 cities are:");
// console.log(Hamburg);
// console.log(Berlin);
// console.log(Dortmund);

// console.log("My favourite 3 cities are:");
// console.log(JSON.stringify(Hamburg));
// console.log(JSON.stringify(Berlin));
// console.log(JSON.stringify(Dortmund));

// console.log("My favourite 3 cities are:");
// console.log("\"Hamburg\"");
// console.log("\"Berlin\"");
// console.log("\"Dortmund\"");

// console.log("My favourite 3 cities are:" + "\n\"Hamburg\"" + "\n\"Berlin\"" + "\n\"Dortmund\"");


// E3.
// a. Create a variable and give it the value of your home city; print it;
// homeCity = "Hamburg"
// console.log(homeCity);

// // b. Create a second variable for the city in which you were born; print it;
// birthCity = "Salzburg"
// console.log(birthCity);

// c. Create a 3rd variable and store the distance between the 2 cities;
// distance = 783
// console.log(distance);

// d. Print the following on one line:
// I was born in .... I now live in ..... The distance between ... and .... is ... kilometers
// console.log("I was born in " + birthCity + "." + " I now live in " + homeCity + "." + " The distance between " + homeCity + " and " + birthCity + " is " + distance + " kilometers.")
// console.log(`I was born in ${birthCity} I now live in ${homeCity} The distance between ${homeCity} and ${birthCity} is ${distance} kilometers`)
// E4. Print the following output:
// I want to buy a Volkswagen which costs 13000
// carBrand = "Volkswagen"
// carPrice = "13000"

// console.log("I want to buy a " + carBrand + " which costs " + carPrice);
// console.log(`I want to buy a ${carBrand} which costs ${carPrice}`);

// E5. Define two more variables with MEANINGFUL names
// carWeight = 3500;
// carLength = 178.00;
// carColor = "red";

// E6
// division /
// 5 Friends are travelling to Berlin. The total cost of gas is 189 EUR. 
// How much does each of them have to pay the driver?

costPerPerson = 189 / 5;

console.log("Cost per traveller is: " + costPerPerson);

// E7
// E7: Input: the year 1990. 
// Use if/else to print "Older" if you are born before that, "Younger", if you are born after 1990. 
// If you are born IN 1990: print "BINGO"

// const birthYear = prompt("When were you born?");
birthYear = 1990

if (birthYear === 1990) {
  console.log("BINGO")
} else if ( birthYear >= 1990) {
  console.log("Youre too young!")
} else {
  console.log("Youre too old!")
}


// E8
// We define a variable for the users birthyear; 
// We want to check if they are over 18, in order to be able to drink beer or not;
// Print the following messages: "You are able to drink beer, since you are ... old" OR
// "You are NOT able to drink beer, since you are ... old"

const userBirthYear = prompt("When were u born?");
currentYear = 2022;

if (userBirthYear >= 2004) {
  console.log("You're not allowed to drink alcohol.")
} else {
  console.log("You're allowed to drink alcohol.")

}

console.log(userBirthYear)
