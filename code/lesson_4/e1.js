
ages = [12, 16, 24, 28, 69, 14, 13, 80] 
// E4. Copy all ages which are greater than 18 to a second array

largerThan18 = []
for (i=0; i < ages.length; i++){

}

console.log("Input: " + ages);
console.log("Result: " + largerThan18);


// E5. Create an array which contains the positions of all ages above 18

largerThan18Positions = []
for (i=0; i < ages.length; i++){

}

console.log("Input: " + ages);
console.log("Result: " + largerThan18Positions);


// E6
// Starting from the ages array, create two other arrays:
// underAge - containing the ages < 18 and legalAge - containing the ages >= 18
ages = [12, 16, 24, 28, 69, 14, 13, 80] 

legalAge = []
underAge = []
for (i=0; i < ages.length; i++){

}

console.log("Input: " + ages);
console.log("Result underAge: " + underAge);
console.log("Result legalAge: " + legalAge);


// E7. 

// Start with 2 hardcoded arrays, e.g. prices1 & prices2
// Calculate a third array that contains the sum of the elements in the first two arrays.

prices1 = [12, 16, 24, 28] 
prices2 = [1, 1, 1, 1]
pricesSum = []
for (i=0; i < prices1.length; i++){
    pricesSum.push(prices1[i] + prices2[i]);
}

console.log("Result: " + pricesSum);
// expected result: [13, 17, 25, 29] 


