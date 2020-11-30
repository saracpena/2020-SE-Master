
//calling  name    ----my array arguments/value----
  const    items = ['Shirt', 'Blouse', 'Slacks'];
//loop  call another var "i",  length of array subtract  variable less than 0   subtract 1 from each iteration
  for  (let i            =     items.length - 1;          i >= 0 ;                i-= 1){
    //PRINT     template literates = back ticks `${} this eliminates the quotes around date, i.e. Shirt, Blouse, Slacks
    console.log(`${i}. ${items[i]}`);// . just adds grammer to console print, ${items[i]} 
                                    //is grabbing items within array of which "i" outputs
}

const words = ["Beautiful"];
for(let h = words.length - 1; h >= 0; h-= 1){
    console.log(`${words[h]}`);
}