//!The forecast today is 293 Kelvin. 
//!To start, create a variable named kelvin, and set it equal to 293.
//!The value saved to kelvin will stay constant. Choose the variable type with this in mind.

//Current temp in Kelvin degress
const kelvin = 293;

//!Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
//!Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. 
//!Store the result in another variable, named celsius.

//Converting Kevlin to celsius 
var celsius = kelvin - 273;

//!Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
//!Fahrenheit = Celsius * (9/5) + 32
//!In the next step we will round the number saved to fahrenheit. 
//!Choose the variable type that allows you to change its value.

//Converting Celsius to Faherenheit 
let fahrenheit = celsius * (9/5) + 32;
//Round down fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

//!Use console.log and string interpolation to log the temperature in 
//!fahrenheit to the console as follows:
//TODO: `The temperature is TEMPERATURE degrees Fahrenheit.`

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

//!NEWTON 

//Converting Celsius to newton
let newton = celsius * (33/100);
//Round down fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);



