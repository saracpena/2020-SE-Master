//1. Write a function that adds three numbers and divide the result by 3 
function theSum(x,y,z){
    return (x+y+z)/3;
}
let sum = theSum(1,2,3);

console.log(sum);

//try converting the code to arrow functions
let theSum2 = (x,y,z) => (x+y+z)/3;
    console.log(theSum2(1,2,3));
