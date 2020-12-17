//Challenge: makePerson

// 1. Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
// 2. Create an empty object
// 3. Add a name property to the newly created object with its value being the name argument passed into the function
// 4. Add an age property to the newly created object with its value being the "age" argument passed into the function
// 5. Return the object

function makePerson(name, age) {//1.
	// add code here
 	const newPerson = {};//2.
  	newPerson.name = name,//3.
	newPerson.age = age;//4.
  return newPerson;//5.
} 
  
  
const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

//Challenge: personStore

//1. Inside personStore object, create a property greet where the value is a function that logs "hello".
const personStore = {
	// add code here
	greet: function(){//1.
    console.log("hello");//1.
  }

};
// Uncomment this line to check your work!
personStore.greet(); // -> Logs 'hello'

//Challenge: personFromPersonStore

//1. Create a function personFromPersonStore that takes as input a name and an age. 
//2. When called, the function will create person objects using the Object.create method on the personStore object.
const personStore = {
	greet: function() {
	  console.log('hello');
	}
  }
  
  function personFromPersonStore(name, age) {//1.
	  // add code here
	  	const person = Object.create(personStore);//2.
	  	person.name = name;//2.
		person.age = age;//2.
		return person;//2.
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // Uncomment these lines to check your work!
  console.log(sandra.name); // -> Logs 'Sandra'
  console.log(sandra.age); // -> Logs 26
  sandra.greet(); // -> Logs 'hello'

  //Challenge: introduce

// 1. Without editing the code you've already written, 
//    add an introduce method to the personStore object that logs "Hi, my name is [name]".

const personStore = {
	greet: function() {
	  console.log('hello');
	}
  }
  
  function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
	person.name = name;
	person.age = age;
	return person;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // add code here 1.
   personStore.introduce = function(){
		console.log("Hi, my name is "+ this.name);
   }
  // Uncomment this line to check your work!
  sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

  //Challenge 1 of 3: PersonConstructor

// 1. Create a function PersonConstructor that uses the 'this' keyword 
//    to save a single property onto its scope called greet. 
// 2. greet should be a function that logs the string "hello".

function PersonConstructor() {//1.
	// add code here
	//1. assign a property called greet to 'this'
	this.greet = function(){ //greet property has a function as its VALUE
  console.log('hello');//2. function logs 'hello'
}
}
const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 *** PersonConstructor 
/*Create a function personFromConstructor that takes as input a name and an age. When called, the function will create
 person objects using the new keyword instead of the Object.create method.*/
 function personFromConstructor(name, age) {
	var personObj = new PersonConstructor;
	personObj.name = name;
	personObj.age = age;
	return personObj;
  }
  
  var mike = personFromConstructor('Mike', 30);
  
  console.log(mike.name); // -> Logs 'Mike'
  console.log(mike.age); //-> Logs 30
  mike.greet(); //-> Logs 'hello'

  /*** CHALLENGE 3 of 3 *** PersonConstructor
/*Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs
 "Hi, my name is [name]".*/

 //WORKS IN PART EXCEPT: PersonConstructor - returned object should have introduce method

 function PersonConstructor() {
	this.greet = function() {
	  console.log('hello');
	}
  }
  
  function personFromConstructor(name, age) {
	const person = new PersonConstructor();
	person.name = name;
	person.age = age;
	return person;
  }
  
  const mike = personFromConstructor('Mike', 30);
  
  // add code here
  mike.introduce = function() {//??????????????
	return "Hi, my name is "+ this.name//????????????
  }
  
  // Uncomment this line to check your work!
  mike.introduce(); // -> Logs 'Hi, my name is Mike'

  //Challenge: PersonClass
  //Create a class PersonClass. 
  //PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. 
  //PersonClass should also have a method called greet that logs the string "hello".
  
  class PersonClass {
	constructor(name) {
    // add code here
	this.name = name;
	}
	// add code here
	greet(){
    console.log('hello');
  }
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'

//Challenge: DeveloperClass

//Create a class DeveloperClass that creates objects by extending the PersonClass class. 
//In addition to having a name property and greet method, DeveloperClass should have an introduce method. 
//When called, introduce should log the string "Hello World, my name is [name]".

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass{
  introduce(){
    console.log('Hello World, my name is '+ this.name);
  }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'