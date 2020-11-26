function outputFormat(num, type){
	return `${num} is ${type}.`;
	/*
	the above string i'm returning is called a template literal.
	it creates a string that's essetially the same as:
	num + ' is ' + type +'.'
	a template literal is an easy way to concatenate (or combine) a string
	with variables.
	it should be noted a template literal uses `` instead of ''
	*/
} //output made easy
function isPrime(num){
	let lowestPossDenom = Math.floor(num/2); /*
	a prime number is a number with no factors other than one and 
	itself. the next lowest factor a number can have after one is
	2, so really when checking if a number is prime, we just have to 
	check up to that number cut in half (rounded down)
	*/
	let remainder;
	let checkPrime = true; //lets me know num is prime or not
	for (var i = 2; i <= lowestPossDenom; i++){
		remainder = num % i;
		if (remainder === 0) { 
			checkPrime = false;
			break; /*
			takes me out of the foor loop,
			so i dont waste time in the loop.
			it's not really necessary, but extra iterations 
			in the loop aren't necessary.
			*/ 
		}
	}
	return checkPrime;
} //checks if prime, returns true or false
 function returnEvenOdd(num){
 	let remainder = num % 2; /*
		explicitly, this code gives me the remainder of num divided by 2.
		what it ends up doing is letting me check if the number is even -
		if the result of this modulus is 0, then there is no remainder
		and num is even. if it is 1, then it is odd.
 	*/
 	return (remainder ? 'odd' : 'even');/*
		the weird format of this return is called a ternary operator.
		a ternary operator is a quick way of writing an if-else statement
		in your code that returns a value once it completes.
		below is an example of the same code but not as a ternary operator.
		note that this code, and the ternary operator above, are checking 
		whether remainder is true or false. if the modulus operation 
		evaluated to 0, it would be even, and the ternary operator would
		evaluate remainder as false. if the modulus operation evaluated to
		1, it would odd, and the ternary operator would evaluate remainder
		as true.
		let output = '';
		if (remainder){
			output = 'odd'
		} else {
			output = 'even'
		}
		return output;
 	*/
 } //
for (var i = 1; i < 21; i++) { 
	if (isPrime(i) && i > 3 ){ /*
			^this if(){} is to check whether or not a number is prime and
			greater than 3. i check if it is greater than 3 first because 
			the instructions state that 1 and 3 should be counted as odd.
			isPrime() is a function i created earlier up in the code.
		*/
		console.log(outputFormat(i,'prime'));
		/*
			this will output that the number being tested, i, is prime.
			outputFormat() is a function i created at the beginning of this
			code to basically make it so i don't have to type a bunch in 
			console.log()
		*/
	} else { 
		console.log(outputFormat(i, returnEvenOdd(i)));/*
		this does the work of the returnEvenOdd function in the 
		outputFormat() function. 
		*/
	}
} //this is essentially where the code works, this for(){} loop