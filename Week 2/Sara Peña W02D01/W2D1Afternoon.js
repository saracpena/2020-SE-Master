//Part 1. Write a for loop for the given output:
//  1, 3, 5, 7, 9
//  2, 4, 6, 8, 10

// for (var i=1; i<=10; i++){
//     if(i%2==0){
//         console.log("this is even "+i);
//     }
//     else{
//         console.log("this is odd "+i);
//     }
// }

//2. Write a for loop that iterates between 0 and 10 and prints all even numbers.

// for (var x = 0; x <= 10; x++) {
//     if (x === 0) {
//             console.log(x +  " even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " even");
//     }
// }

//2B. Write a for loop that iterates between 0 and 10 and prints all odd numbers.

// for (var x = 1; x <= 10; x++) {
//     if (x === 0) {
//             console.log(x + " even");
//     }else if (x%2 !==0){
//             console.log(x+ " odd")
//     }
// }

//3. Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, 
//“even” for all even numbers, and “odd” for all odd numbers. 
//Treat 2 as an even number and 1 & 3 as odd

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0)
//         console.log(i + " is even;" + "\n");
//     else if (i == 1 || i % 3 == 0)
//         console.log(i + " is odd;" + "\n");
//     else
//         console.log(i + " is prime;" + "\n")
//     }

// PRIME NUMBERS LOOP
// for (var counter = 0; counter <= 10; counter++) {
//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     } if (notPrime === false) {
//                 console.log(counter);
//     }
// }

//FUNCTION = a container that we put 'code' in (logic)
function outputFormat(num, type){
    return `${num} is ${type}.`;
}//output made easy

function isPrime(num){
    let lowestPossDenom = Math.floor 
}

