// 1. Create an Array containing 10 values
// 2. Create an empty Array
// 3. Use for loop to iterate thru the array (start @ index 0)
// 4. Assign a value to every index while iterating array

var myArr = [];
for(var i = 0; i <= 10; i++){
    myArr[i] = i;
}
console.log(myArr);//i is a value for each element in the array

//ADDING ELEMENTS PER ITERATION

let numsArray = [];
for(let i = 0; i <= 10; i++){
    numsArray.push(i);
    console.log(numsArray);
}

//MAP OBJECT:
let student = {//MAP
    first_Name: 'Sara',//3 Keys: FN, LN, Class
    last_Name: 'Peña',//3 Values: student info
    class: 'SE'
}
console.log(student);

//CODE ALONG MAPS
let places = {
    Disneyland:'Magical',
    Home: 'Family',
    CATW: 'Church Family',
    Spain:'',
    Hawaii:'',
    Salary: 60000 + 60000//does not take commas

}
console.log(places);