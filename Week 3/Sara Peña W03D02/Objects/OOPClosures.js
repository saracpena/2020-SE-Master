//OBJECT ORIENTED PROGRAMMING: Use Closure to Protect Properties Within an Object from Being Modified Externally

// function Bird() {// =line 7
//   this.weight = 15;//=line 17, 'let' will make this public property private (by creating a variable within the constructor function)
//   this.getWeight = () => weight; //=line 9
// }
// function Bird(){
//   let weight = 15;
//   this.getWeight = function(){
//     return weight;
//   };
// }
// let ducky = new Bird();
// ducky.getWeight();

function Bird() {
    let weight = 15;
    this.getWeight = () => weight; 
  }
  let ducky = new Bird();
  ducky.getWeight();

//OBJECT ORIENTED PROGRAMMING: Understand the Immediately Invoked Function Expression (IIFE)

  function makeNest() {
    console.log("A cozy nest is ready");
  }
  
  (function(){
  console.log("A cozy nest is ready");// this is an anonymous function expression that executes right away
})();// Outputs "A cozy nest is ready" immediately

// NOTE that the function has no name and is not stored in a variable. 
//The two parentheses () at the end of the function expression cause it to be 
//immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.
 
  