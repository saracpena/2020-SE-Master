//1. What is an efficient way to create an array for first 50 integers?

var arr = [];
for(var i = 0; i <= 50; i++){
    arr.push(i);
}
console.log(arr);

// 2. You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/

var shoppingList = ["cool ranch doritos","kings hawaiian sweet bread","peanut butter oreos","fruit loops cereal"];
shoppingList.push("Hendricks gin");

console.log(shoppingList);


// 3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
yoda.reverse();

console.log(yoda);


// 4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time 
//and assinging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
// var nowServing = "";
// for(var i = 0; i < 5; i++){//changes waitList.length to '5' elements, why does that work and not .length?
//     nowServing = waitList.shift();//waitList.pop()//waitList.shift()//[i]
//     console.log("Now serving " + nowServing);
// }

//Clive's Code:

// var nowServing = waitList.map((element) => {
//     return 'Now serving ' + element;
//   });

//if you want the right order, we can chain the methods: 
// var nowServing = waitList.reverse().map((element) => {
//     return 'Now serving ' + element;
// });

//2ND VERSION OF #4

// var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
// var nowServing = "";
// waitList = waitList.reverse();
// for(var i = 0; i < 5; i++){//5 as oppose to waitList.legnth, why?
//     nowServing = waitList.pop();
//     console.log(nowServing);
//     console.log(waitList);
// }
// console.log("Done");

//3RD VERSION OF #4

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";
for(var i = 0; i < 5; i++){
    nowServing = waitList.shift();
    console.log(nowServing);
    console.log(waitList);
}
console.log("Done");


// 5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. 
//Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];
var shoeString = shoe.toString();
console.log(shoeString.toString());
 

