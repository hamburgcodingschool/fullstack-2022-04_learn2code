// E0. Increase all prices larger than 2000 with 10%; 
prices = [120, 1600, 2400, 2800] 
for (i=0; i < prices.length; i++){
    if (prices[i] > 2000){
        // increasedPrice = prices[i] + 0.1 * prices[i];
        // console.log(increasedPrice);
        // prices[i] = increasedPrice;
        prices[i] = prices[i] + 0.1 * prices[i];
    }
}
console.log("Result: " + prices);
// 120, 1600, 2640, 3080

// E1
// Start with 2 hardcoded arrays, e.g. prices1 & prices2
// Calculate a third array that contains all the elements 
// in the first two arrays.

prices1 = [12, 16, 24, 28, 78, 90] 
prices2 = [1, 1, 1, 1]
allPrices = []
for (i=0; i < prices1.length; i++){
    allPrices.push(prices1[i]); 
}
for (i=0; i < prices2.length; i++){
    allPrices.push(prices2[i]); 
}

// Hint: another for loop?

console.log("Result: " + allPrices);
// [12, 16, 24, 28, 1, 1, 1, 1] 