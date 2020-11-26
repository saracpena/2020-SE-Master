//1. Write a function that adds three numbers and divide the result by 3 
function theSum(x,y,z){
    return (x+y+z)/3;
}

sum=theSum(1,2,4);

console.log(sum);

//try converting the code to arrow functions
theSum = (x,y,z) => x+y+z;
    console.log(theSum(1,2,3));
