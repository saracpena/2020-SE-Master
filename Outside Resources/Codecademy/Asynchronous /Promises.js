// //JAVASCRIPT PROMISES

// Constructing a Promise Object
// Let’s construct a promise! To create a new Promise object, we use the new keyword and the Promise constructor method:

// const executorFunction = (resolve, reject) => { };
// const myFirstPromise = new Promise(executorFunction);
// //The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. 
// //The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

// //The executor function has two function parameters, usually referred to as the 
// resolve() and reject() functions. 
// //The resolve() and reject() functions aren’t defined by the programmer. 
// //When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

// // resolve is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
// // reject is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
// // Let’s look at an example executor function in a Promise constructor:

// const executorFunction = (resolve, reject) => {
//   if (someCondition) {
//       resolve('I resolved!');
//   } else {
//       reject('I rejected!'); 
//   }
// }
// const myFirstPromise = new Promise(executorFunction);

//Let’s break down what’s happening above:

// We declare a variable myFirstPromise
// myFirstPromise is constructed using new Promise() which is the Promise constructor method.
// executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
// If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
// If not, we invoke reject() with the string 'I rejected!'
// In our example, myFirstPromise resolves or rejects based on a simple condition, but, in practice, promises settle based on the results of asynchronous operations. For example, a database request may fulfill with the data from a query or reject with an error thrown. In this exercise, we’ll construct promises which resolve synchronously to more easily understand how they work.

// Instructions
// 1.
// You’ll be writing your code in the code-editor, but we won’t be running it until the final step. To check your code for a step, you can press the “Check Work” button.

// We’re going to create a promise representing ordering sunglasses from an online store. First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

//myExecutor() should:

// Have two parameters: resolve and reject
// Check if the sunglasses property on the inventory object has a value greater than zero
// If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
// If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'
// When you’re ready, press the “Check Work” button.

// Checkpoint 2 Passed

// Hint
// Here’s an example executor function expression:

// const anExampleExecutor = (resolve, reject) => {
//     if (someCondition) {
//         resolve('I resolved!');
//     } else {
//         reject('I rejected!');
//     }
// }
// 2.
// Create a function, orderSunglasses(). This function should have no parameters. It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.

// Checkpoint 3 Passed

// Stuck? Get a hint
// 3.
// Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.

// Checkpoint 4 Passed

// Stuck? Get a hint
// 4.
// At the bottom of your app.js file, log orderPromise to the console.

// Checkpoint 5 Passed
// 5.
// In this exercise and throughout the lesson, we’ll provide you with a bash terminal to execute your code. To run the app.js program, you’ll type node app.js in the terminal and hit enter (or return). You’ll be able to see the output of the program in the terminal.

// Let’s try it! Type node app.js in the terminal and hit enter.

// If you’d like, you can see an alternate output by changing the sunglasses property in the inventory object to 0 and executing app.js from the terminal again.

// When you’re ready to move on, press the “Check Work” button.

// Checkpoint 6 Passed


const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
//create the function, myExecutor() with const
const myExecutor = (resolve, reject) => {// Have two parameters: resolve and reject
    if (inventory.sunglasses > 0) {// Check if the sunglasses property on the inventory object i.e. 'inventory.' has a value greater than zero
        resolve('Sunglasses order processed.');// If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
    }else {
        reject('That item is sold out');
    }
};

const orderSunglasses = () => {// Create a function, orderSunglasses() w/ no params
    return new Promise(myExecutor);//return a new promise constructed by passing your myExecutor()
};

const orderPromise = orderSunglasses();// Create a variable orderPromise assigned to the returned value of your orderSunglasses()

console.log(orderPromise);// At the bottom of your app.js file, log orderPromise to the console.
