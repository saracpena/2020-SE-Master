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

console.log("   Printing Prime via WHILE LOOP==");

let num = 1;
while (num <= 20) {
  let pCount = 2;
  let flag = 0;
  while (pCount < num) {
    if (num % pCount == 0) {
      flag = 1;
      break;
    }
    pCount++;
  }
  if (num > 1 && flag == 0) {
    console.log(num + " is prime");
  }
  num++;
}