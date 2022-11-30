let numbers = [5, 6, 7, 8, 9]

// if (numbers.map(x => x % 2 === 0).length > 0){
//     console.log("there are even numbers in the array");
// }

// ^^ reallife code


// extract to an array
// let areEvenArray = numbers.map(x => x % 2 === 0)

// make the arrow stuff more readable
let areEvenArray = numbers.map((x) => { return x % 2 === 0; })

// extract it into own function
function isEven(x) {
    return x % 2 === 0;
}


// This is the "naive", "simple" way
let areEven2 = [];
for (i=0; i<numbers.length; i++){
    currentIsEven = isEven(numbers[i]);
    areEven2.push(currentIsEven);
}
console.log(areEven2)






// let areEvenForEach = numbers.forEach((x)=> x % 2 === 0)
// console.log("This is undefined: " + areEvenForEach);


console.log(areEven);




