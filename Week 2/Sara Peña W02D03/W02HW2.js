//Functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
//use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// console.log("       Number 1======================")

// function maxOfTwoNumbers (num1,num2){
//     if(num1>num2){
//         console.log(num1);
//     } else {
//         console.log(num2);
//     }
// }     
// maxOfTwoNumbers(22,21);

// // function maxOfTwoNumbers(num1,num2){
// //     (num1 > num2) ? console.log(num1) : console.log(num2); //ternary statement
// // }
// // max0fTwoNumbers(22,21);

// //2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// console.log('       NUMBER 2=======================');    
    
// function maxOfThree (x,y,z){
//     if ((x > y) && (x > z)) { //boolean
//         return x;
//     } else if ((y > x) && (y > z)) { //boolean
//         return y;
//     } else {
//         return z;
//     }
// }
//     console.log(maxOfThree(20,28,35));

//SO MUCH SIMPLER
// function maxOfThreeNumbers(num1, num2, num3) {
//     if(num1 > num2 && num1 > num3) {
//         console.log(num1);
//     } else if (num2 > num3 && num2 > num1) {
//         console.log(num2);
//     } else { 
//         console.log(num3);
//     }
// }
//     maxOfThreeNumbers(1000, 20, 10);

//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
// console.log("       NUMBER 3==========================");

function isCharacterAVowel(vowels){
    if(vowels === 'a'||vowels === 'e'||vowels === 'i' || vowels === 'o' || vowels === 'u'){
        return "The character " + vowels + " is a vowel";
    }
    else{
        return "The character " + vowels + " is NOT a vowel" ;
    }
}
    console.log(isCharacterAVowel("z"));

//2nd Version
// var vowels = ['a','e','i','o','u'];

//     function isCharacterAVowel(vowels,x){ //define function
//         var newVowel = vowels.filter(elements => elements === x);
//         return newVowel.length > 0 ? "The character " + x + " is a vowel": "The character " + x + " is NOT a vowel" ;
// }
// console.log(isCharacterAVowel(vowels,'y'));

//4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and 
//multiplyArray([1,2,3,4]) should return 24.

const sumArray = (Array) => {
    let sum = 0;
    let product = 1;
    for (let i=0; i < Array.lenght; i++) {
        sum += array[i];
        product *= array[i];
    }
    console.log(`sum equals ${sum}\nProduct equals ${product}`);
};

sumArray([1,2,3,4]);

// var result = 0;

// function sumArray(x){
//     x.forEach(element => {
//         result+= elements; 
//     });
//     return result;
// }
// // function multiplyArray()


//5. Write a function that returns the number of arguments passed to the function when called.

//6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") 
//should return the string "ratset gaj".

// let revString = (str) => {
//     //1. step 1 use split("") on str to split the characters and return a new array.
//     var splitArray = str.split("");
//     //2. Now reverse this new array "splitArray" using reverse();
//     var reverseArray = splitArray.reverse();
//     //3. Now use join() to join the individual characters in "reverseArray" to make the whole string and output the result
//     console.log("The original string " + str + " is reversed to " + reverseArray.join(""));
//   }
//   var strArg = "!World is Beautiful!";
//   revString(strArg);
        
//7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
        
//8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
        

//==========BONUS=========//
        
//1. Add a method reverseString (from question 6) to the object String so that it is possible to call: 
//"Per Scholas".reverseString().


        
//2. Write a function that takes a string as argument and returns an object where:
    // a. the keys are the characters that occur in the string
    // b. the values are the number of occurrences for each letter, regardless of the case