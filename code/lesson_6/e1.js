// E1. The following function should return the sum of all elements in an array;
// The result of the code below should print:
// 8
// 4
// Fix the code below to work as expected:

let sum = 0;
function sumOfArrayValues(array){
    for (let i=0; i<array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let sum1 = sumOfArrayValues([2, 3, 3]);
let sum2 = sumOfArrayValues([1, 1, 1, 1]);
console.log(sum1);  // 8
console.log(sum2);  // 4


// E2 Modify the function to only return the sum of all even elements in the array
// function sumOfEvenArrayValues(array){
// }

// let sumEven1 = sumOfArrayValues([2, 3, 3]);
// let sumEven2 = sumOfArrayValues([1, 1, 1, 1]);
// console.log(sumEven1);  // 2
// console.log(sumEven2);  // 0

// E3 Write a function that returns boolean true if an array contains a specific number (also given as parameter)

// function containsElement(array, number){
//     // returns boolean
// }

// console.log(containsElement([1, 2, 3], 1)); // prints true;
// console.log(containsElement([5, 7, 9], 1)); // prints false;