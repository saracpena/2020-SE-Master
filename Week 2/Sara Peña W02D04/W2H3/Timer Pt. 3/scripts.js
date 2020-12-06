window.addEventListener('DOMContentLoaded', documentLoaded, false);

//globals

var startTime;
var limitMin;
var limitSec;
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
    var input1 = this.querySelector("#txtMin");  //read minutes
	var input2 = this.querySelector("#txtSec");  //read seconds
    var label = this.querySelector("div");
    
  
  //calls to the register minutes then moves focus to the seconds input
  startTime = new Date();
  input1.addEventListener("keydown", function keydown(evt) {
	if (evt.keyCode === 13) { // 13 is the code for ENTER
		//input.value = label.innerHTML;
	    limitMin = parseInt(input1.value);
  

        // its important to remove the keydown listener, otherwise in a subsequent edit
        // we will end up with several keydown listeners running
  
		input2.focus();
	}
  });//calls to the register seconds then calls the timer
  input2.addEventListener("keydown", function keydown(evt) {
	if (evt.keyCode === 13) { // 13 is the code for ENTER
		//input.value = label.innerHTML;
	    limitSec = parseInt(input2.value);
       
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
  if (minutes == limitMin && seconds >=limitSec) {
    document.getElementById("clock").className = "red";
  } else {
    document.getElementById("clock").className = "blue";
  }

}