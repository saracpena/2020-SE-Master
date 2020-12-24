  
var userOne = {//encaptulation - capturing what it means to be the user in this object
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){//function (){} in JavaScript prior to E6
        console.log(this.email, 'has logged in');//'this' refers to the local object
    },
    logout(){
        console.log(this.email, 'has logged out');//'this' refers to global object
    }
};//it's better to have a good idea of what properties you want to avoid adding later

userOne.login();
userOne.logout();

//userOne.name - accesses above object and update info
userOne.name = "Yoshi"//will change the name can be done in text editor and browser

//via dot notation
//userOne.etc =

//via Brackets
//userOne['etc'] musy be put in 'string'
//userOne['name'] = 'mario'

//WAYS TO EFFICIENTLY CREATE SEVERAL DIFFERENT USERS USING CLASSES - THE BLUEPRINT
//Classes are like prototypes,


