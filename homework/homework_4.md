##### Stage 2

###### 2.1 Play a singing game with Sally
Because it can now do loops, your bot can now sing songs.

Make your bot compose a simple song for you.

The bot should:

- [ ] ask you for a number
- [ ] ask you for a word
- [ ] compose a song based on the values you gave it

Your bot should say something similar to this:

```
Hey! Tell me a number.
> 7
Great! Now give me a word.
> la
```

**Example Output**
```
lalalalalalala
```

**Hint**
> Use a for loop
> Create a variable outside the for loop, to store the song content
> song = ""
> For each iteration in the for loop: add the word to the song content
> song += "la"


###### 2.2 Play a guessing game with Sally
Implement a guessing game that your bot can play with its users.

The bot should:

- [ ] hardcode a random number (e.g. randomNumber = 78)
WHILE the user did not guess the number:
- [ ] ask the user to input a number
- [ ] check if the guess is correct
- [ ] tell the user: "too large" or "too small"
After the user has guessed the number:
- [ ] tell the user: "good job"

Optional:
- [ ] count how many tries it took the user to guess and tell them: "nice job! you guessed after 5 tries"


**Hint**
> Use a WHILE loop (check out 02-while.js from lesson_3 for another example of how it works)
> Create a variable outside the while loop, to count how many times the user tries to guess
> For each iteration in the while loop: compare the inputted number with the actual number.

Use this starter code:
```

randomNumber = 77;

while(inputFromUser !== randomNumber){
    console.log("You did not guess. Try again");
    inputFromUser = Number(readlineSync.question("Please give me a number."));
}

console.log("Great! You guessed my random number!");
console.log(inputFromUser);

```

Your bot should say something similar to this:

```
I am thinking about a number. Try to guess it!
> 7
My number is larger!
> 400
My number is smaller!
> 70
My number is larger!
...
...
...
> 78
Great job! You guessed the {randomNumber} that I thought of.
```