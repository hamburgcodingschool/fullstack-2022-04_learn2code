// Bonus: do it in a single for loop

prices1 = [12, 16, 24, 30] 
prices2 = [1, 1, 1, 1]
allPrices = []

if (prices1.length > prices2.length){
    for (i=0; i < prices2.length; i++){
        allPrices.push(prices1[i]); 
        allPrices.push(prices2[i]);         
    }

    for (i=prices2.length; i<prices1.length; i++){
        allPrices.push(prices1[i]); 
    }
} else if (prices1.length < prices2.length){
    for (i=0; i < prices1.length; i++){
        allPrices.push(prices1[i]); 
        allPrices.push(prices2[i]);         
    }

    for (i=prices1.length; i<prices2.length; i++){
        allPrices.push(prices2[i]); 
    }
} else {
    for (i=0; i < prices1.length; i++){
    allPrices.push(prices1[i]); 
    allPrices.push(prices2[i]); 
}
}


console.log(allPrices);
console.log(allPrices.length);