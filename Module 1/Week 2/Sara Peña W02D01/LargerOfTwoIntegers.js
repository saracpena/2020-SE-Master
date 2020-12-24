//Enter student's grade
/*1. Write a JavaScript display the larger of two integers

2. Write an if/else statement for the following requirements:

If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F*/
let grade=80;
if(grade>=90){
    console.log("You got an A!");}
    else if (grade>=80){
    console.log("You got a B");
}else if (grade>=70){
    console.log("You got a C");
}else if (grade >=55){
    console.log("You got a D");
}else if (grade<55){
    console.log("You Failed");
}
//Clock Display USING MILITARY TIME
/*3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 
| "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"*/
var time=1500;
if (time>=0500 && time<=1159){
    console.log('Good Morning');
}else if (time>=1200 && time<= 1600){
    console.log('Good Afternoon');
}else{
    console.log("Hey there");
}
//EXAMPLES: ParseInt
const a='1'
if(a===1){
    console.log('should not execute')
}
if(parseInt(a)===1){
    console.log('parse int works');
}

console.log(5+'5');
console.log(5+ parseInt('5'));

