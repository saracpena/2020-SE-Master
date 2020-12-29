//!DOG YEARS//

//TODO:Create a variable named myAge, and set it equal to your age as a number.
//TODO: Write a comment that explains this line of code.

//my Age to be compared to dog years
const myAge = 35;

//TODO: Create a variable named earlyYears and save the value 2 to it. 
//TODO: Note, the value saved to this variable will change.

//variable will vary
var earlyYears = 2;

//TODO: Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 
//TODO: and reassign it to earlyYears.

earlyYears *= 10.5;

//TODO: Since we already accounted for the first two years, 
//TODO: take the myAge variable, and subtract 2 from it.
//TODO: Set the result equal to a variable called laterYears. 
//We’ll be changing this value later.

//
let laterYears = myAge - 2;

//TODO: Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. 
//TODO: Use the multiplication assignment operator to multiply and assign in one step.

laterYears *= 4;

//TODO: print earlyYears and laterYears to the console. Are the values what you expected?

console.log(earlyYears);
console.log(laterYears);

//TODO: Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears

//determine my Age in dog years
let myAgeInDogYears = (earlyYears + laterYears);

//TODO: Write your name as a string, call its built-in method .toLowerCase(), 
//TODO: and store the result in a variable called myName.
//TODO: The toLowerCase method returns a string with all lowercase letters.

//
var myName = 'Sara'

console.log(myName.toLowerCase());//? 'Grace Hopper'.toLowerCase(); ANOTHER EXAMPLE

//TODO: Write a console.log statement that displays your name and age in dog years. 
//! Use STRING INTERPOLATION to display the value in the following sentence:
//? 'My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years.`)