
// E1. Print all even numbers between 10 and 20 (including 10 and 20). An even number is a number
// x for which the following is true: x % 2 === 0

for (i=0; i<=10; i+=1){
    console.log(i);
    console.log("I am at i = " + i);
}

// E2. Iterate from 0 to 50; Print "##" for even numbers and "!!" for odd numbers;
for (i = 0; i < 51; i++ ) {
    if (i % 2 === 0) {
        console.log("##");
    }  else {   
        console.log("!!");
    }
} 

// E3. Print all numbers from 10 to 0 in descending order;
for (i=10; i >= 0; i--) {
    console.log(i);
}


// E4. Find the max number in the interval [10,100] which is divisible with 3, 4 and 5;

for (i=120; i > 9 ; i--) {
    if (i % 3 === 0 && i % 4 === 0 && i % 5 === 0) {
        console.log(i);
        break;
    }
}



// E5. Print only the first 3 even numbers in the interval [10, 100]; 

c = 0;
for (i=10; i<=100;i++) {
    if (i % 2 === 0) {
        console.log(i);
        c++;
        if (c === 3) {
            break;
        }
    }
}