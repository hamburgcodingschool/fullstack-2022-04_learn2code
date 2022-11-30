// Objects - used to store properties which belong to the same entity

// empty object
let book = {}

let myName = "Paul";
console.log(typeof(myName));
myName = 450;
console.log(typeof(myName));

function printBookCurrency(b){
    console.log(b.currency)
}

let book1 = {
    currency: "EUR",
    year: 2020,
    pages: 200,
    authors: ["Paul Anton", "Teresa Holfeld"],
    publishing_house: {
        city: "Berlin",
        zip: 700046,
        country: "Germany"
    },
    title: "JS rocks",
    price: 250
}

console.log(book1.author);
console.log(typeof(book1.author));
console.log(book1.price);
console.log(typeof(book1.price));

book1.price = book1.price + 10/100 * book1.price;
console.log(book1.authors.length);
console.log(book1.publishing_house);




let age = 30;

function isOverage(a){
    if (a>18){
        return true;
    }
    return false;
}

console.log(isOverage(age))