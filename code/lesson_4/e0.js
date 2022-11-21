
ages = [12, 16, 24]

// E0. Print all the ages in the array in reverse order;
for (let i = ages.length-1; i >= 0; i = i - 1){
    console.log(ages[i]);
}


// E1. Print all positions of all ages greater than 18;
for (let i = 0; i < ages.length; i = i + 1){
    if(ages[i] > 18){
        console.log(i);    
    }
}

// E2. Count how many ages in the array are greater than 18;
// Hint: an extra variable
count = 0;
for (let i = 0; i < ages.length; i = i + 1){
    if(ages[i] > 18){
        count += 1;
    }
}
console.log("I counted " + count + " ages greater than 18");

// E3. Iterate through the array and calculate the sum of its values;
// Hint: an extra variable

sum = 0;
for (let i = 0; i < ages.length; i = i + 1){
    sum = sum + ages[i];
}
console.log("The sum of the array elements is " + sum);

// E Optional
// Find the maximum and the minimum values in the array.
// Find the amplitude ("difference between max and min") of the array.
