// OOP - Classes: Model a vending machine

// When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) 
    //of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

var VendingMachine = {
    snacks: [
        {name:"Crunch", code:"A01", quantity:10, price:0.60},
        {name:"Milky Way", code:"A02", quantity:5, price:0.60},
        {name:"Vanilla Cold Brew", code:"A03", quantity:1, price:0.65},
        {name:"Honest Honey Green Tea", code:"A04", quantity:1, price:0.25}],


 vend: function(indexPosition){
     return this.snacks[indexPosition]
 } 
}           
 console.log(VendingMachine.vend(0));