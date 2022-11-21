ages = [12, 16, 24, 98]

// // E0. Print all the ages in the array in reverse order;
// for (let i = ages.length -1; i >= 0; i = i - 1){
//     console.log(ages[i]);
// }

// E1. Print all positions of all ages greater than 18;
// for (let i = 0; i < ages.length; i = i + 1){
//   if (ages[i] >= 18) {
//     console.log([i]);
//   }
// }

// E2. Count how many ages in the array are greater than 18;
// Hint: an extra variable
// counter = 0
// for (let i = 0; i < ages.length; i = i + 1){
//     if (ages[i] >= 18) {
//       counter += 1
//       console.log(ages[i]);
//     }
//   }
// console.log(`There are ${counter} ages in the array above 18!`)

// E3. Iterate through the array and calculate the sum of its values;
// Hint: an extra variable
sum = 0
for (let i = 0; i < ages.length; i = i + 1){
  sum = sum + ages[i] 
}
console.log(sum)

// E4. Min and Max Value
min = Math.min(...ages)
max = Math.max.apply(null, ages)

console.log(min)
console.log(max)
console.log(max-min)