// // Add the string "passed" to every element in the array below:

let students = ["Sebastian", "Oliver", "Samuel", "Hugo", "Lily", "Vasilis"]

students.forEach((value, index, array) => {
    console.log(value);
    array[index] += " " + value.length;
})

console.log(students);

// Add the length of each name to each string element in the array below:
// e.g. "Paul 4" "Sebastian 9"
// Sebastian9 Sebastian 9



// // Add 10 % to each price in the folowing array, using foreach and arrow function
let prices = [10, 20, 30, 40, 50]

prices.forEach((value, index, array) => {
    console.log(value);
    array[index] += value * 0.1;
})

console.log(prices);