const quiz = require('./candidate-testing');

const input = require('readline-sync');

let goat = input.question("Which is your favorite goat?")

console.log("Your favorite goat is: " + goat);

let ageOfGoat = input.question("How old is " + goat + ("?"));

console.log(goat + (" is: ") + ageOfGoat);

let firstNumber = input.question("Give me a first number.");

let firstNumberInt = parseInt(firstNumber);

console.log("Your chosen first number is: " + firstNumberInt);

let secondNumber = input.question("Give me a second number.");

let secondNumberInt = parseInt(secondNumber);

console.log("Your chosen second number is: " + secondNumberInt);

let numbersMultiplied = firstNumberInt * secondNumberInt;

console.log("Your chosen numbers multiplied is: " + numbersMultiplied);


/*
let firstnumber=3;
let secondnumber=6;  
console.log(typeof secondnumber);
firstnumber="7";
console.log(firstnumber+ " " + secondnumber);
secondnumber="7";
console.log(typeof secondnumber);
console.log(secondnumber);
*/

quiz.runProgram();