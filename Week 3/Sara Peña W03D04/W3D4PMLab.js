// Create an Animal class. ^
// The class will have name, age, color, legs, superPower attributes ^
// Create two objects of this class - both with a unique superPower 
// Create three methods for this class - include one method named userSuperPower()
// Create two objects for this class

class Animal{//CLASS
    constructor(name, age, color, legs, superPower){//is a function
        this.name = name;
        this.age = age;
        this.color = color;//must add another property to method chain
        this.legs = legs;
        this.superPower = superPower;
    }userSuperPower(){
        console.log(`my super power is ${superPower}`);//instead of 'this.'

    }speaks(){

        console.log(this.name + " can speak");//or (`${name} can speak`)
    }run(){
        console.log(this.name + " can run");
    }
}

const dog = new Animal('Charlie', 16, 'red-brown' , 4, 'mind reader);
console.log(dog);
dog.userSuperPower;
dog.speaks;
dog.run;
// dog.name = "Fluffy";
// console.log(dog.name);

const puppy = new Animal('Darcy', 1, 'black and white', 4, 'makes you happy');
console.log(puppy.superPower);
puppy.userSuperPower;
puppy.speaks;
puppy.run;


// Create a class name User
// This class with have firstName, lastName, department attributes 
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class

class User{
    constructor(firstName, lastName, department){
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }changeDepartment(newDepartment){  
        this.department = newDepartment;
    }
}

let user1 = new User('Sara', 'Peña', 'SE');//instance of a class
//object  = instance of a class
console.log(user1);
let user2 = new User('Eric', 'Parker', 'FD');
console.log(user2);
let user3 = new User('Alex','Walker', 'PD');
console.log(user3);
user3.changeDepartment('SE'); 

