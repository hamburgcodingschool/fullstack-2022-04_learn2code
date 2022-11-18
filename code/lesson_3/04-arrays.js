// Arrays store lists of values

names = ["Paul", "Andreas", "Filip"];
ages = [60, 18, 25];

vowels = ['a', 'e', 'i', 'o', 'u'];

console.log(typeof ages);
console.log(ages[0]);
console.log(names[0]);

console.log("The ages array has: " + ages.length + " elements");

ages.push(19);
console.log(ages)
console.log("The ages array has: " + ages.length + " elements");


for (i=0; i<names.length; i++){
    console.log("Position: " + i);
    console.log("Value:" + names[i]);
}


// ignore this, but play with it if you want

// persons = [];

// for (i=0; i<names.length; i++){
//     // currentName = names[i];
//     // currentAge = ages[i];

//     currentPerson = {
//         "id": i,
//         "name": names[i],
//         "age": ages[i]
//     }
//     persons.push(currentPerson);
//     console.log("Persons has " + persons.length + " elements");
// }
// console.log(persons);

