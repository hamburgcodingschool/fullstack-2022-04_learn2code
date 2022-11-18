#### Build your own chatbot

##### Stage 1

###### 1.1 Sally introduces herself

Your bot should be nice to its users. Make your bot print a welcome message to the user.

The bot should:

- [ ] introduce itself
- [ ] mention the year when it was ~created~ born

Your bot should say something similar to this:

```
Hey! I am {botName}. I was born in {birthYear}.
```
Replace the values of *{botName}* and *{birthYear}* with something of your choice.

**Example Output**
```
Hey there! My name is Sally.
I was born in the year 2020
```

###### 1.2 Introduce yourself to Sally
Using the console input, tell your bot what your name is.

The bot should:

- [ ] Ask the user for their name
- [ ] Print a greeting, using the user's name

Your bot should say something similar to this:

```
So, I hate talking to strangers. What is your name?
Nice to meet you, {userName}
```
The value of *{userName}* is the one that the user wrote in the console.


**Example Output**
```
What is your name?
> Paul
Nice to meet you, Paul.
```


##### 1.3 Tell Sally your age
Using the console input, tell your bot how old you are.

The bot should:

- [ ] Ask the user for their age
- [ ] Calculate their birthyear
- [ ] Print out their birthyear

Your bot should say something similar to this:

```
I know this may not be nice to ask, {userName}, but I am curious:
What is your age?
> 28
Oh wow! So you are born in {birthYear}! Crazy!
```
The value of *{birthYear}* is calculated by Sally, given your age and the year we are in.

**Example Output**
```
What is your age, {userName}?
> 28
So your birth year is: {birthYear}! But I guess you knew that already :)
```

### Optional
##### 1.4 Make Sally look smart
Play a guessing game with your bot.

The bot should:

- [ ] Invite the user to play a guessing game.
- [ ] Ask the user to think about a secret number.
- [ ] Ask for the remainder of the division: secret number / 3
- [ ] Ask for the remainder of the division: secret number / 5
- [ ] Ask for the remainder of the division: secret number / 7
- [ ] Print out the secret number

Your bot should say something similar to this:
```
Hey, {userName}, let's play a guessing game. Are you ready? Press Enter!
>
So, {userName}, think about a number and write it down on paper! When ready, press Enter.
>
Ok. So if you divide your number by 3, what is the remainder?
> 1
Nice! If you divide your number by 5, what is the remainder?
> 3
One more! If you divide your number by 7, what is the remainder?
> 0
Okay, ready for me to blow your mind?
Your secret number is....{secretNumber}!
I am amazing, right?
```

The *{secretNumber}* can be calculated using this formula:

```
secretNumber = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
```

**Caution:** This formula only works with numbers between 0 and 104.