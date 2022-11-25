// E4. 
// Write a function that takes two parameters: an array and a Number;
// The function returns the index of 
// the element's first occurence in the array;

function findPositionOfNumberInArray(array, number) {
    // iterate over the array -> for loop
    // compare the item of each position in the array to the <givenNumber>
    //                        -> equality operator === 
    //                        -> if statement
    // return the position of the current item
    //                        -> return

}

// BONUS
// If the number is not in the array, return the value -1

// BONUS
// If the number appears multiple times, return an array with all positions

let a = [15, 16, 17, 15];
let returned = findPositionOfNumberInArray(a, 17);
console.log(returned);  // Should print 2

returned = findPositionOfNumberInArray(a, 16);
console.log(returned);  // Should print 1


// E5. Check if a string contains a letter
// Write a function that takes two parameters: a string and a number;
// The function returns 
        // true if the letter is in the string
        // false if the letter is NOT in the string
        function containsLetter (inputString, letter){

        }



// E6. 
// Write a function that takes two parameters: an array and a Number;
// The function returns the index of the element's last occurence in the array;


// BONUS
// If the number is not in the array, return the value -1
function findLastPositionOfNumberInArray(array, number) {
   
}


// E7. 
// Write a function that takes two array objects as parameters;
// 7.a Return the total count of elements: 
// how many numbers are in both arrays

function countArrayElements(array1, array2){

}

let a1=[10, 11, 12]
let a2=[4]
value = countArrayElements(a1,a2);
console.log("The two arrays contain " + value + " elements"); // 4

// 7.b Merge the two arrays and return a single array with their contents

function concatenateArrays(array1, array2){

}

// let's think in english:
// add array2 to array1 -> push() function - DOES NOT WORK
// iterate through array2
// for each value in array2, do: array1.push(value)
// return array1

let a11=[10, 11, 12]
let a22=[4, 6]

// array3 = concatenateArrays(a11, a22);
// console.log(array3); // [10, 11, 12, 4, 6]
let a3 = concatenateArrays(a11, a22);
console.log(a3)
console.log(a11);
