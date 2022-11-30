// Arrow functions - "syntactic sugar"

function addNumbers(a, b) {
    return a + b;
}

let count = 0;
let sum1 = addNumbers(5, 9);
console.log(sum1);

// let addNumbersArrow = (a, b) => {
//     return a + b;   
// }
let addNumbersArrow = (a, b) => a + b;   
console.log(addNumbersArrow);
console.log(typeof(addNumbersArrow));

let sum2 = addNumbersArrow(18, 18);
console.log(sum2);



// let addNumbers2 = (a, b) => {
//     return a + b;
// }

// sum = addNumbers(5, 3);
// sum2 = addNumbers2(5, 3);

// console.log(sum);
// console.log(sum2);

// let y = 5 > 2;
// let z = 15 % 2 === 0;
// let x = Number(false); // 0
// let xx = Number(true); // 1

function isEven(x) {
    return x % 2 === 0;
}

console.log(isEven(15));
console.log(isEven(16));

// let isEvenArrow = (x) => { return x %2 === 0; }
let isEvenArrow = (x) => x % 2 === 0;

console.log(isEvenArrow(15));
console.log(isEvenArrow(16));





function generateRandomNumber() {
    return Math.random();
}

let generateRandomNumberArrow = () => Math.random();

console.log(generateRandomNumber());
console.log(generateRandomNumberArrow());
