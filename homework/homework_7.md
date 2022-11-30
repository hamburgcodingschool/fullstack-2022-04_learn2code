
## Part 1 - Sally - Stage 4

##### 4.1 Cipher

Make Sally encode some messages for you. The bot:

- [] takes some text as input from the console;
- [] reads the text letter by letter;
- [] converts each letter to another letter according to the Cipher Rule;
- [] prints out the encrypted text;

###### The Cipher Rule

Each letter gets shifted to the right by 3 places. As a result, 'a' becomes 'd', 'e' becomes 'h'. The last three letters in the alphabet are wrapped around to the beginning: 'x' becomes 'a', 'y' becomes 'b' and 'z' becomes 'c'. Non-letter characters are not modified.



**Example Input**

```
> hi i am paul
```

**Example Output**

```
kl l dp sdxo
```

**Hint 1:** you can use a string that contains all alphabet letters:

      alphabet='abcdefghijklmnopqrstuvwxyz'

**Hint 2:** you can treat the string alphabet as an array:

      alphabet[0] - will be the letter 'a'

      alphabet[1] - will be the letter 'b'

**Hint 3:** You can get started with the following concepts:
- for Loops
- building a string letter by letter
- array operations (methods)
- Builtin function: IndexOf() may be helpful :)

### Bonus

##### Decipher
Build the same, but the other way around.

**Example Input**

```
> kl l dp sdxo
```

**Example Output**

```
> hi i am paul
```