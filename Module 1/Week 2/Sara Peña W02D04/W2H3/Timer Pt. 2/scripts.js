window.addEventListener('DOMContentLoaded', documentLoaded, false);

//globals
var startTime;
var limit;
var tempor;

function documentLoaded() {
  "use strict";

  // listen for mouse clicks on the button
  document.getElementById("clock").addEventListener("click", Clicked);

  console.log("Document");
}

// when we click on the button, we save the current time, and the time limit. We then
// create a timer to execute the "updateTime" function once a second.
function Clicked(evt) {
  "use strict";
    var input = this.querySelector("input");
    var label = this.querySelector("div");
    

  input.value = 10; // default starting counter when you click on numbers
  
  startTime = new Date();
  input.addEventListener("keydown", function keydown(evt) {
	if (evt.keyCode === 13) { // 13 is the code for ENTER
		//input.value = label.innerHTML;
	    limit = parseInt(input.value); //read limit from input
       

        // its important to remove the keydown listener, otherwise in a subsequent edit
        // we will end up with several keydown listeners running
        
		clearInterval(tempor);
		tempor = setInterval(updateTime, 1000);
	}
  });
  
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

  // show the elapsed time
  document.getElementById("clock").innerHTML = minutes + ":" + seconds;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutes >= limit) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}