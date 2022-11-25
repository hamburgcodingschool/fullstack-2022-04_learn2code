// functions can return: numbers, strings, boolean, objects
function isEven(number){
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

function arrayLongerThan(array, length){
    if (array.length > length){
        return true;
    }
    return false;
}

isLonger = arrayLongerThan([2, 3, 4, 5], 2);
console.log(isLonger)

myName = "Paul";
myNameLowercase = myName.toLowerCase();