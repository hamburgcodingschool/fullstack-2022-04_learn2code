// objects can have arrays as properties
// E1. Let's find out how many bikes the user has

// 1.1 write one line of code to print how many bikes the user has
// 1.2 write a function that takes an user as parameter and returns the number of bikes the user has

let person = {
    firstName: "Paul",
    lastName: "Anton",
    age: 28,
    bikes: ["Mountain Bike", "Road Bike", "Cyclo Cross"],
    minutesOnSocialMedia: [45, 55, 60, 120, 280, 900]
}

console.log(person.bikes)



// E2.
// 2.1 Add another property to the book object. e.g. language
// 2.2 Write a function that returns the book language.
// 2.3 Write a function that prints the book details in the language in which the book is written:

// if the language of the book is "english", print the message in english:
// "The price of the book is ... and the title is ..."

// if the language of the book is "german", print the message in german

let book = {
    title: "The Godfather",
    price: 40,
    currency: "USD"
}

function getBookLanguage(b){

}

function printBookDetails(b){

}

let language = getBookLanguage(book);
printBookDetails();


// E3
// 3.1 Write a function that decreases the price of a book to half of its value; The function should return the book object;
// 3.2 Write a function that converts a book's authors' last name to lowercase
// .toLower()
// 3.3 Write a function that converts a book's authors' last name to uppercase
// .toUpper()


let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR",
    author: {
        lastName: "Anton"
    }
}
function lastNameToLower(book) {

}

function lastNameToUpper(book) {
    
}

function priceInHalf(book) {

}


// E4. You are given an array with 2 book objects:  
// 4.1 Add another book to the array of objects
// 4.2 Print the name of the author of the first book in the array
// 4.3 Print the name of the author of the last book in the array
// 4.4 Write a function that takes as input the array of books and returns an array of authors
let books = [
    {
        pages: 200,
        year: 2022,
        author: {
            firstName: "Paul",
            lastName: "Anton"
        },
        language: "DE"    
    },
    {
        pages: 230,
        year: 2022,
        author: {
            firstName: "Oliver",
            lastName: "G"
        },
        format: "DE"    
    },
]

function extractAuthors(booksArray){

}

// E5 - same like E3, but books are in an array now
// 5.1 Use a for loop to decrease the price of all books in the array to half of their original price
// 5.2 Use a for loop to convert all books' authors' last name to lowercase
// .toLower()
// 5.3 Use a for loop to convert all books' authors' last name to uppercase
// .toUpper()
// 5.4 Use a for loop to increase the price of all books written in german by 10 percent

let b1 = {
    title: "Gone with the wind",
    price: 30,
    currency: "EUR"
}

let b2 = {
    title: "The godfather",
    price: 40,
    currency: "USD"
}

// this comes from the database
let books = [b1, b2];
