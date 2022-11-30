function addNumbers(a, b) {
    return a + b;
}

let addNumbers2 = (a, b) => {
    return a + b;
}

sum = addNumbers(5, 3);
sum2 = addNumbers2(5, 3);

console.log(sum);
console.log(sum2);


function isEven(x) {
    return x % 2 === 0;
}

let isEven2 = x => { x % 2 === 0; }



function generateRandomNumber() {
    return Math.random();
}

let generateRandomNumber2 = () => { Math.random();}

