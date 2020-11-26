//AGE//
var age =17;
if (age >=18) {
    console.log("Access Granted");
} else{
    console.log("Access Denied");
}

//IF STATEMENTS//
var num=-4;
if (num>100){
    console.log("Positive+Greater than 100");
} /*NOT NESTED 'ELSE' IF*/
if (num>0 && num<100) {
    console.log("Positive+Less than 100");   
} /*NOT NESTED 'ELSE' IF*/
if (num<0){
    console.log("Negative");
}
//NESTED ELSE STATEMENTS ADD ELSE AND PUT IF NEXT TO IT//

var num=-4;
if (num>100){
    console.log("Positive+Greater than 100");
}/*NESTED ELSE IF*/ else if (num>0 && num<100) {
    console.log("Positive+Less than 100");   
}/*NESTED ELSE IF*/ else if (num<0){
    console.log("Negative");
}

//EFFICIENT NESTED ELSE/IF//
let num2=-67;
if(num2>100){
    console.log('Positive+Greater than 100')
}
else if (num2>= 0 && num2<100){
    console.log('positive and less than 100')
}
else console.log('Negative')

//PSEUDO CODE

// IF (<condition 1>) --> condition calculates i.e. num<0
// {
//      <instructions 1> --->if the above condition is correct then this is the result, i.e. console.log("it's positive")
// } 
// ELSE 
// {
//     IF (<condition 2>)
//     {
//          <instructions 2>
//     } 
//     ELSE 
//     {
//         <instructions 3>
//     }
// }

//In JavaScript, 
//the NOT!! expression!! is represented by a single exclamation point, !, 
// and needs to be placed in front of the expression to negate:
// if (!(cumulativeGPA > 2.0 &&  unitsCompleted >= 120)) {
//     sendEmail(); 
//   }