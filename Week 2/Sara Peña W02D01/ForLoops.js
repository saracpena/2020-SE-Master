//LOOPS output multiple of 3 starting with 6
// for (var i=6;i<=60;i+=3){
//     console.log(i);
// }

// //var (jar) is saving i (label of jar), without var it simply prints out a statement (non-functional)
// for (i = 6; i <= 60; i++){    //Curly brackets measure the 'SCOPE' of code, i.e. if (i%3==0) console.log(i);
//     if (i%3 == 0)    
//     console.log(i);
// }

// var i=-1; //dedicated i with value -1
// console.log(i);

// //FOR LOOP is efficient because all conditions can fit in ONE LINE
// //i has become 0// 'let' i is a completely diff variable, this functioning different than i in line 1
// for (let i=0; i<10; i++){ //i++ does not get executed in first iteration
    // console.log(i);
// }//curly bracket 'loops' us back to i++ until 10<10

// //Scoping = 
// console.log(i);

//FOR LOOP SEQUENTIAL
console.log("   for loop seq=========");

for(i=1;i<=10;i++){
    console.log("Hello: ", i);
}

//FOR LOOP MULTIPLES OF 3
console.log("   for multiples of 3=========");

for(i=1;i<=10;i+=3){
    console.log("Hello: ", i);
}

//FOR LOOP PERFECT SQUARES
console.log("   for squares=========");

for(square=1;square<=20;square++){
    console.log(`${square}x${square}=${square * square}`);// square x square = result
}

console.log("   while loop================");

//WHILE LOOP
var i=1;
while(i<=10){
    console.log(i);
    i++;
}

console.log("   Do While Loop=================");

//DO WHILE LOOP used in video games when they loop waiting for you to "START/PAUSE/PLAY" etc.

var i=1;
do{
    console.log(i);
    i++;
}while (i<=10);

console.log("   forEach/forIn Loop=================");

//Going through each loop is AKA iteration*/

//forEach OR forIn synonymous
var sub = [1,2,3];
for(i in sub)
    console.log(sub[i]);

console.log("   for LoopBREAK==============================") 

//For Loop with BREAK
for(i=1;i<=10;i++){
    console.log(i);
    if(i==5)
    break;
}
console.log("   forEachforIn LoopBREAK==========================");

//ADDING A BREAK TO forEach/forIn
var sub = [1,2,3,4,5,6];
for(i in sub){
    console.log(sub[i]);
        if(sub[i]==5)
        break;
}
console.log("   While Loop 0-20/Divisible by 2/Multiplied by 3=======================");

var i=0;
while(i<=20){ //condition 1 (loop to be 0-20)
if (i%2==0)//condition 2 (all numbers should be divisible by 2 and multiplied by 3)
    console.log(i*3);//multiply by 3 before they are OUTPUT, all other integers should not be OUTPUT
    i++;
}

console.log("Clive's loop============================================")
for (let x = 1; x < 20; x++) {
    if(x > 1){
      if(x == 2 || x == 3){
        console.log(x);
       }else if(x % 2 && x % 3){
        console.log(x);
      }
    }
  }








// var num=0;while(num<=20){  
// if(num%2==0){    
//     var output=num*3;    
//     console.log(output);  }  
//     num++;
// }

