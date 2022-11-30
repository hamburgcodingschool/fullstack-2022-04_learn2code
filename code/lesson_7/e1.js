// Arrow functions exercises

// The code below calculates the sum of an array elements
// Use arrow function and foreach instead of a for loop

arr = [12, 13, 14, 15]
let sum = 0;
for (let i = 0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum); // should output 54


sum = 0;
arr.forEach((value, index, array)=>{
    sum += value
});

console.log(sum) // should output 54

// Count appearences of specific letter in an array;
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'a']
let countA = 0;
for (let i = 0; i<arr.length; i++){
    if (arr[i] === 'a'){
        countA += 1;
    }
}




console.log(countA);