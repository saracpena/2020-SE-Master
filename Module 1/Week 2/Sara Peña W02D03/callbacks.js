function fun0(param1){
    console.log("callback start");
    param1();
}

        //Param1 is a function input
const bar = (param1) => {
    console.log("callback start");
    param1();//input above being executed as a function
}
      //=> is a function
bar( ()=>{
    console.log("function 1");
}); //first callback const bar

bar( ()=>{
    console.log("function 2");
});//second callback const bar

//I don't get it!
const bar = function fun0(param1){

}