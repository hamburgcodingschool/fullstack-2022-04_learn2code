readlineSync = require('readline-sync');

userName = readlineSync.question('May I have your name? \n');
console.log('Hi ' + userName + '!');