prices = [10, 20, 30, 40]
prices.push(50);
console.log(prices);

prices[0] = prices[0] + 1;
console.log(prices);

// increase all prices in the array with 10 EUR:
for(i = 0; i < prices.length; i++){    
    prices[i] = prices[i] + 10;
}

console.log(prices);