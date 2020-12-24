//Functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
//use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
console.log("       Number 1======================")

let num1 = 22
let num2 = 21

function maxOfTwoNumbers (num1,num2){
    if(num1>num2){
        console.log(num1);
    } else if (num1<num2){
        console.log(num2);
    }
}     
maxOfTwoNumbers(num1,num2);

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
console.log('       NUMBER 2=======================');    
    
function maxOfThree (x,y,z){
    if ((x > y) && (x > z)) { //boolean
        return x;
    } else if ((y > x) && (y > z)) { //boolean
        return y;
    } else {
        return z;
    }
}
    console.log(maxOfThree(20,28,35));
    

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
console.log("       NUMBER 3==========================");

    function isCharacterAVowel(vowels){
        if(vowels === 'a'||'e'||'i'||'o'||'u'){
            return "The character is a vowel";
        }
        else{
            return "The character is a consanant";
        }
    }
        console.log(isCharacterAVowel("a"));

//4. Write a function charCount that takes a string and returns the length of the string.
console.log("       NUMBER 4===========================");

let myString = "The life of the party!";

function charCount(myString);{
        return str.length;
    }


//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. 
//add a check for the string to be of 10 or less characters.