// Create a second array based on an existing array.

cities = [];

cities.push("Hamburg");
console.log(cities);
console.log(" has the length " + cities.length);

cities.push("Berlin");
console.log(cities);
console.log(" has the length " + cities.length);

cities.push("Dortmund");
console.log(cities);
console.log(" has the length " + cities.length);


ages = [12, 16, 24, 28, 69, 14, 13, 80] 
// E4. Copy all ages which are greater than 18 to a second array

largerThan18 = []
for (i=0; i < ages.length; i++){
    if(ages[i] > 18){
        largerThan18.push(ages[i]);
    }
}

console.log("Input: " + ages);
console.log("Result: " + largerThan18);
