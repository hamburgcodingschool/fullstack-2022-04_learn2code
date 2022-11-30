// Same exercises from lesson 6 e0.js & e1.js

// E1.
// Write an arrow function that takes as parameters: the userName and the userBirthMonth and prints the following:
// "Hello, <userName>. Your birth month is: <birthMonth>"

function helloUser(userName, birthMonth) {
    console.log("Hello, " + userName + "Your birth month is" + birthMonth);
}

// helloUser("Paul", "July");
// helloUser("Fredi", "Mai");

let helloUserArrow = (userName, birthMonth) => {
    console.log("Hello, " + userName + "Your birth month is" + birthMonth);
}

helloUserArrow("Paul", "July");

// Output: 
"Hello, Paul. Your birth month is: July";

// E2. 
// Write an arrow function that builds a song by repeating a word. 
// The word and the number of times should be passed in as parameters.
// singSong("hello", 5);
// hellohellohellohellohello

let singSong = (word, count) => {
    song = "";
    for (i=0; i < count; i++) {
        song += word
    }
    console.log(song);
}

singSong("la", 7);
singSong("dum", 10);


// E3. Check if a string contains a letter
// Write a function that takes two parameters: a string and a number;
// The function returns 
// true if the letter is in the string
// false if the letter is NOT in the string
let variableA= "a";
function containsLetter (inputString, letter){
    console.log(typeof(this));
    return inputString.includes(letter);
}

let containsLetterArrow = (inputString, letter) => inputString.includes(letter);

containsLetter("aaaaa", "b");