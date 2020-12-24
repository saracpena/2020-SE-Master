//Object Oriented Programming: Create a Basic JavaScript Object
let dog = {
    name: "Charlie",
    numLegs: 4
    };

//Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name);//must print separately
  console.log(dog.numLegs);

//Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){//Methods are properties that are functions.
      return "This dog has " + dog.numLegs + " legs.";}//semi-colon inside curly bracket
  };
  dog.sayLegs();//printing

//Make Code More Reusable with the 'this' Keyword, use to avoid
//if an object has many references to its properties there is a greater chance for error.
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}//instead of 'dog' replace with 'this'.numLegs
  };
  
  dog.sayLegs();

//Define a Constructor Function
//Think of them as a blueprint for the creation of new objects.
function Dog(){//Constructors are functions that create new objects.
    this.name = 'Charlie';//They define properties and behaviors that will belong to the new object.
    this.color = 'Red-brown';//'this.attribute' etc.
    this.numLegs = 4;
}

//Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog();//'new' tells JavaScript to create a new instance of Dog called hound
  //using blueprint we re-use function for a new type of Dog

//Extend Constructors to Receive Arguments
function Dog(name, color) {//To more easily create different Bird objects, you can design your Bird constructor to accept parameters:
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    let terrier = new Dog("Charlie", "Re-Brown");
    
//Verify an Object's Constructor with instanceof - Anytime a constructor function creates a new object, that object is said to be an instance of its constructor.
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse = new House(6);
  myHouse instanceof House;//instanceof allows you to compare an object to a constructor, 
                        //returning true or false based on whether or not that object was created with the constructor.

//Understand Own Properties
//name and numLegs are called own properties, because they are defined directly on the instance object. 
//That means that duck and canary each has its own separate copy of these properties. 
//In fact every instance of Bird will have its own copy of these properties. 
//The following code adds all of the own properties of duck to the array ownProps:
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps); // prints [ "name", "numLegs" ]
  
//Use Prototype Properties to Reduce Duplicate Code
//Since numLegs will probably have the same value for all instances of Bird, 
//you essentially have a duplicated variable numLegs inside each Bird instance.
//Properties in the 'prototype' are shared among ALL instances of Bird
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;//'prototype'
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

//Iterate Over All Properties

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let property in beagle) {//iterate over all properties
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

  console.log(ownProps); // prints ["name"]
  console.log(prototypeProps); // prints ["numLegs"]

//Understand the Constructor Property

