## Part 1
Stage 3
###### 3.1 Sally wants to help you keep track of your social media consumption

Let's have Sally keep track of the following: the number of minutes that the user has spent online each day, for the last 5 days.

Sally can then compute some statistics for us.

The bot should:

- [ ] hardcode an array of numbers
- [ ] print the array of numbers
- [ ] Print the average time spent on social media (in minutes)
- [ ] Print the maximum time spent in a day (in minutes)
- [ ] Print the minimum time spent in a day (in minutes)
- [ ] Print the total amount of time spent on social media (in minutes)
- [ ] All of the above, but in hours


**Example Output**
```
This is the time you spent on social media in the last 5 days:
[40, 30, 20, 45, 15]

The average time is: 35 minutes.

The maximum time spent in a day is: 45 minutes.

The minimum time spent in a day is: 15 minutes.

The total time spent in the last 5 days is: 150 minutes.

```





##### Arrays Fun

1. Start with a hardcoded array and a hardcoded number. Count the occurences of the hardcoded number in the array;

2. Start with a hardcoded array. 
2.1 Count the even numbers in the array;
2.2 Count the odd numbers in an array;

3. (E3 from Lesson 5)
Start with 2 hardcoded arrays, e.g. prices1 & prices2. Build a third array that contains the sum of the elements in the first two arrays.
```
prices1 = [12, 16, 24, 28] 
prices2 = [1, 1, 1, 1]

for (i=0; i < prices1.length; i++){

}
console.log("Result: " + pricesSum);
// expected result: [13, 17, 25, 29] 
```

4. Start with a hardcoded array of prices. Increase all prices in this array which are larger than 2000 with 10%; (check the example in the file `02-array-modify.js`)

```
prices = [120, 1600, 2400, 2800] 
for (i=0; i < prices.length; i++){

}
console.log("Result: " + prices);
```

5.  Start with a hardcoded array of numbers. For each number in the array, print the following:
    * "Negative", if the number is negative;
    * "Positive", if the number is positive;
    * "Zero", if the number is 0;


## Part 2 - Bonus
6. Start with a hardcoded array. 
6.1 Check if there is a number that appears at least 2 times in the array; 
6.2 Check if there are more numbers that appear at least 2 times in the array;

**Hint** You can also use a for loop inside a for loop :) 
