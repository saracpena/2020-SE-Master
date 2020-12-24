
//WAYS TO EFFICIENTLY CREATE SEVERAL DIFFERENT USERS USING CLASSES - THE BLUEPRINT
//Classes are like prototypes,

class User{//CLASS
    constructor(email, name){//is a function
        this.email = email;
        this.name = name;
        this.score = 0;//must add another property to method chain
    }
    login(){//new function method
        console.log(this.email, 'just logged in');
        return this;//after adding function for method chaining
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;//after adding function for method chaining
    }
    updateScore(){//method chaining requires a new function
        this.score++;//
        console.log(this.email, 'score is now', this.score);
        return this;//run line 18 + 19 and return 'this' i.e. the instanceOf the object
    }
}

var userOne = new User('sara@peña.com', 'sara');
var userTwo = new User('peña@sara.com','peña');
var admin = new Admin("Sarita@gmail.com",'sarita');

var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);

console.log(userOne);
console.log(userTwo);

//the 'new' keyword does the following,
// - creates a new empty object 
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

userOne.login().updateScore().updateScore().logout();//method chaining add aforementioned methods one at a time
userTwo.logout().updateScore().updateScore().login();

//USING CLASS INHERITANCE for Admin use, to allow them to delete/modify users
//STEP 1
class Admin extends User{//inherit from original class User using 'extends'
    deleteUser(user){//pass in extra functionality to Admin
        users = users.filter(u =>{//"filter method" allows us to cycle through each element inside the array and filter one or all out of array
        return u.email != user.email;
    })
}
//STEP 2 LINE 30 - Create a new array to store the users to filter through array when deleting users.
