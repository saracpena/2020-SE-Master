//Generate 7 HashTag iterations #,##,###,####,#####,######,#######
//FIRST STAGE
/*
for(let count = 0; count<7; count++){
    console.log(count);
}
*/
//SECOND STAGE//Stack overflow
/*
for(let count = 0; count < 7 ; count++){
    for(let i=0; i<=count ; i++){
      process.stdout.write("#");
}
    console.log();
}*/

//ANOTHER SOLUTION
var hash='';//this is 0
for(let i = 0; i<7; i++){
    hash +='#';
    console.log(hash);
}

/*var hash = '';for(let i = 0; i < 7; i++){  hash += '#'  console.log(hash);}*/