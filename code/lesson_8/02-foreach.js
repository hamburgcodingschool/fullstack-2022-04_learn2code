let numbers = [5, 6, 7, 8, 9, 10];

// function printMeIfEven(a){
//     if (a%2 === 0){
//         console.log("value: " + a);
//     }
// }

// for (let i = 0; i< numbers.length; i++){
//     printMeIfEven(numbers[i]);
// }

// numbers.forEach(printMeIfEven)

// Option 1
numbers.forEach(myFunction)
// below is what forEach does
// for (let i = 0; i < numbers.length; i++) {
//     myFunction(numbers[i], i, numbers);
// }

function myFunction(v, i, a) {
    console.log("Value: " + v);
    console.log("At Index: " + i);
    console.log("Array is:" + a);
}

// Option 2
numbers.forEach((value, index, array)=> {
    console.log("Valueeee: " + value);
    console.log("At Index: " + index);
    console.log("Array is:" + array);
})



// // Add the string "passed" to every element in the array below:

let students = ["Sebastian", "Oliver", "Samuel", "Hugo", "Lily", "Vasilis"]

students.forEach((value, index, array) => {
    console.log(value);
    value = value + 10; // - does not work because of https://stackoverflow.com/questions/12482961/change-values-in-array-when-doing-foreach
    array[index] += " passed";
})

console.log(students);

// Add the length of each name to each string element in the array below:
// e.g. "Paul 4" "Sebastian 9"



// // Add 10 % to each price in the folowing array, using foreach and arrow function
// let prices = [10, 20, 30, 40, 50]




// // E Optional
// // Find the maximum and the minimum values in the array.
// // Find the amplitude ("difference between max and min") of the array.
