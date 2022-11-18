// For loop - "turning pages in a book"

// While - only allows us to give a condition to check

// For - allows us to give a start and an end condition

for (i=0; i<=10; i+=2){
    console.log(i);
}

// E1
for (i=10; i<=20; i=i+1){
    if(i % 2 === 0){
        console.log(i);
    }
}


// E2
for (i=0; i<=50; i=i+1){
    if(i % 2 === 0){
        console.log("##");
    } else {
        console.log("!!");
    }
}


// E3
for (i=10; i >= 0; i--) {
    console.log(i);
}

// E4. Find the max number in the interval [10,130] 
// which is divisible with 3, 4 and 5;

for (i=130; i>10; i--) {
    if(i%3===0 && i%4===0 && i%5===0){
       console.log("The largest number is: " + i);
       break;
    }
}