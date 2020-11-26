//function==============
// function theSum(x,y){
//     return x+y;
//     console.log(x+y);//test
// };

// //Main ==================
// var sum;
// sum= theSum(10,10);//the variable that the return keyword will return
// console.log(sum);

//2nd Example function =======
// function OddEven(x){
//     if(x%2==0) //how does this calculate?
//         return "even";
//     else{
//         return "odd";
//     }
// };

// //Main ==================
// // var sum;
// // sum= OddEven(10);
// // console.log(sum);

// //MAIN COMBINED/CONDENSED====
// console.log(OddEven(11));//ente the "sum" variable itself

// // Step 1. x=11 
// // Step 2. x%2 = 11%2 = 5 w/ 1 remainder so, 
// // Step 3. 1 == 0, no, it is not equal
// // Step 4. which return will execute? "else{ return 'odd'}"

// //functional Programming is like a Matryoshka Doll=================
// var se = 30;

// function printX(){
//     //x=3
//     var x = 3;
//     console.log("x within printX " + x);//x within printX 3
//     console.log("Calling printY " +printY());//Calling printY 5 (if I didn't add this line functon skips to "RETURN")
    
//     function printY(){
//         //y=5
//         var y= 5;
//         console.log("Y within printY "+ y);
//     }
//     return x;
// }; //DONT FORGET SEMI COLON HERE

//Main ================= i.e. GLOBAL/MAIN SCOPE, PrintX SCOPE, PrintY SCOPE = 3 Nested Scopes
//console.log(oddEven(-5));

// console.log("se"+se);//se30  
// console.log("Calling printX "+printX());//
// // console.log("y"+y);


//Below code not working, why?

// var count = 0;
// var x = 1;
// console.log("before loop "+ x);
// line 62();

// function line 62(){
//     var x = 2;
//     console.log("inside loop "+x);
// }

// console.log("after loop " +x);
// line5();

function sum(x,y){
    return x+y;
}
//w=x z=y
var w=6, z=4;
console.log(sum(w,z));

//i.e.
const bar = function sum (x,y){
    return x+y;
}

console.log(bar(2,3));