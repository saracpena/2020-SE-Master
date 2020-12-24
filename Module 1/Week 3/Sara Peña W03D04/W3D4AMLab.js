// OOP - Inheritance 

// Create a class called Fish ^
// Define a method Swim() 
// Create a class Nemo that inherits from Fish ^
// Define an attribute color ^
// Create a Nemo object. Can it swim? 


class Fish {//Parent Class 'Fish'
  constructor(){//don't need name
  } 
  Swim(){
      console.log("I can swim");
    }
  }

class Nemo extends Fish{//Child Class of Class 'Fish'
    constructor(color){
      super();//used to access the object's parent i.e. 'SUPER CLASS' aka 'FISH', must go before the 'this'.attribute
      this.color = color;
    }
}
let Nemo1 = new Nemo('Orange');//Object/Instance of Child Class 'Nemo'
console.log(Nemo1);
Nemo1.Swim();



// function createNewPerson(name) {
//     const Nemo = {};
//     obj.name = name;
//     obj.greeting = function() {
//       alert('Hi! I\'m ' + obj.name + '.');
//     };
//     return obj;
//   }

// class Fish {
//   constructor() {
//   }
//   swim() {
//     console.log("I can swim");
//   }
// }

// class Nemo extends Fish {
//   constructor(color) {
//     super();
//     this.color = color;
//   }
// }
// var Nemoo = new Nemo("purple");
// Nemoo.swim();

// Find the difference between abstract class and an interface

//The difference between class and interface,
//ABSTRACT classes - are classes which can have ABSTRACT METHODS which are methods with declaration
//only


// Which of the two can have implementation of a method in the class?