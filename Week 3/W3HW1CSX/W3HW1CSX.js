//Challenge: Arrays - EXAMINING ELEMENTS====================================

//1. Create a variable called fourthItem 
//2. assign it the value of the fourth item in the horror array ('Ghostface'). 
//3. Then console.log fourthItem to see the output.

const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
const fourthItem = 'Ghostface';

// Write a console.log statement below to check your work!
console.log(fourthItem);

//Challenge: Arrays - ADDING ELEMENTS====================================

//Use a built-in JavaScript method to add another show to the netflixShows array. 
//Then log your updated array to the console.

const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE

netflixShows.push('Rivers');
// Write a console.log statement below to check your work!
console.log(netflixShows);

//Challenge: FOR LOOPS - FUNDAMENTALS =========================

//Using a for loop, decrement countDown by one each time the loop runs until it equals 0, 
//making use of looping functionality instead of logging each number separately.

let countDown = 10;
// ADD CODE HERE
for(countDown = 10; countDown >= 0 ; countDown--)

// Uncomment the below line to check your work
console.log(countDown); // -> should print 0;

//Challenge: FOR LOOPS AND ARRAYS ====================================

//1. Iterate through the synonyms array using a for loop, 
//  pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.

//2. Use a second for loop to iterate through the greetings and console.log() each greetings.

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for(let i = 0 ; i < synonyms.length; i++){
  greetings.push('Have a ' + synonyms[i] + ' day!')
}
	console.log(greetings);
// 2. Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for(let i = 0 ; i < greetings.length; i++){
	console.log(greetings[i]);
}

//Challenge: FOR LOOPS AND ARRAY INDICES =================================

//INCOMPLETE????

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];
const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < firstNames.length; i++){
    bios.push(i+'. My name is ' + firstNames[i] + ' ' + lastNames[i] + ' and I am from ' + places[i])
  }
  console.log("length:",bios.length);
  console.log(bios);
//Challenge: ADDING PROPERTIES/CALCULATING ARRAY ELEMENTS ==========================================

//You are given an array of five numbers called increaseByTwo. 
// 1. Use a for loop to iterate through the array 
//  AND 
// 2. increase each number by two.

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let i = 0; i < increaseByTwo.length; i++){ 
	 increaseByTwo[i]+=2;   //2. increaseByTwo[i] += 2;
}
// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

//Challenge: EVALUATING KEYS ==============================================


//Challenge: OBJECTS - ADDING PROPERTIES ===================================

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
let arr = [];
for (let i = 0; i < possibleIterable.length; i++) {
   if (possibleIterable[i] % 3 === 0){
     divByThree[possibleIterable[i]] = i
   }
};
console.log(divByThree)

//Challenge: 