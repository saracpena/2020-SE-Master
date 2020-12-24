// when the document is loaded, trigger the "documentLoaded" function
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limit;
var temporizador;

function documentLoaded() {
	"use strict";

	// listen for mouse clicks on the button
	document.getElementById("btnStart").addEventListener("click", Clicked, false);

	console.log("Document"); // log doument to console to confirm it was loaded
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function Clicked() {
	"use strict";

	startTime = new Date();

	limit = parseInt(document.getElementById("txtTempo").value);

	clearInterval(temporizador);
	temporizador = setInterval(updateTime, 1000);
}

function updateTime() {
	"use strict";

	// read the current time
	var currentTime = new Date();

	// calculate how many seconds passed since the start of the timer
	var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

	// convert seconds to minutes and seconds (below 60)
	var minutes = Math.floor(elapsed / 60);
	var seconds = Math.floor(elapsed % 60);

	// pad with zeroes on the left to look better
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	// show the  time
	document.getElementById("clock").innerHTML = minutes + ":" + seconds;

	// check if we are above the time limit and set the color of the timer accordingly
	if (minutes >= limit) {
		document.getElementById("clock").className = "red";
	} else {
		document.getElementById("clock").className = "blue";
	}

}

//TAKE 2 - Simple

// const startingMinutes = 1;//global variable because it's outside the function
// let time = startingMinutes * 60;

// const countdownEl = document.getElementById('timer');

// setInterval(updateCountdown, 1000);

// function updateCountdown(){
// 	const minutes = Math.floor(time/60);//math.floor retrieves lowest number without decimals
// 	let seconds = time % 60;//all seconds remaining after the division
	
// 	seconds = seconds < 10 ? '0' + seconds : seconds;//reassigning 'seconds' variable to be "if" statement nested in ternary

// 	countdownEl.innerHTML = `${minutes}: ${seconds}`;
// 	time--;
// 	time = time < 0 ? 0 : time;
// }

//TAKE 3

// // when the document is loaded, trigger the "documentLoaded" function
// window.addEventListener('DOMContentLoaded', documentLoaded, false);

// var startTime;
// var limit;
// var temp;

// function documentLoaded() {
// 	"use strict";

// 	// listen for mouse clicks on the button
// 	document.getElementById("btnStart").addEventListener("click", updateCountdown, false);

// 	console.log("");
// }

// // when we click on the button, we save the current time, and the time limit. We then
// // create a timer to execute the "updateTime" function once a second.
// function updateCountdown() {
// 	"use strict";

// 	startTime = new Date();

// 	limit = parseInt(document.getElementById("txtTime").value);

// 	clearInterval(temp);
// 	temp = setInterval(updateTime, 1000);
// }

// function updateTime() {
// 	"use strict";

// 	// read the current time
// 	var currentTime = new Date();

// 	// calculate how many seconds passed since the start of the timer
// 	var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

// 	// convert seconds to minutes and seconds (below 60)
// 	var minutes = Math.floor(elapsed / 60);//math.floor retrieves lowest number without decimals
// 	var seconds = Math.floor(elapsed % 60);//all seconds remaining after the division

// 	// pad with zeroes on the left to look better
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;
// 	}
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}

// 	// show the elapsed time
// 	document.getElementById("clock").innerHTML = minutes + ":" + seconds;

// 	// check if we are above the time limit and set the color of the timer accordingly
// 	if (minutes >= limit) {
// 		document.getElementById("clock").className = "red";
// 	} else {
// 		document.getElementById("clock").className = "blue";
// 	}

// }