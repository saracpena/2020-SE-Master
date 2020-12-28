// references:
// .then vs .done: https://stackoverflow.com/a/34422715

console.log("executing app.js");

// Main function that runs the app
$(() => {
	$("#search-button").on('click',()=>{
		// clear divs
		for (const div of $(".results")){
			div.innerHTML = "";
		}

		// check if user has entered a number in the box
		let numRequests = 10;
		if($("#num-requests")[0].value){
			numRequests = $("#num-requests")[0].value;
		}

		// make list of selected boroughs
		let requestedBoroughs = [];
		for (const boroughInput of $("#borough-selectors > input:checked")){
			let id = boroughInput.getAttribute("id");
            let boroughName = $(`label[for='${id}']`)[0].innerText.toUpperCase();
            requestedBoroughs.push(boroughName);
		}

		// could this work? https://api.jquery.com/each/
		// $("#borough-selectors > input:checked").each((item) =>{
		// 	console.log($(this).prev());
		// });

		// for each selected borough make ajax call and print to div
		for (const boroughName of requestedBoroughs) {
			makeCallForBorough(boroughName,numRequests)
				.then((data) => {
					let boroughNameFormattedForId = 
						boroughName.toLowerCase().split(" ").join("-");

					let displayDivId = `#${boroughNameFormattedForId}-results`;
					displayData(displayDivId,data);
				});
		}
	});


	});

	makeCallForBorough("BRONX",10)
		.then(function(data) {
			displayData("#bronx-results",data);
			console.log(data);
		});


function displayData(location,data) {
	let headingName = location.slice(1).split("-").join(" ");
	$(location).append(`<h3 class="borough-heading">${headingName}</h3>`);

	for (const datum of data){
		let $entry = $('<div>');
		$entry.addClass('entry');
		$entry.append(
			`<span class="description"> ${datum.complaint_type}: ${datum.descriptor}</span>`);

		let $button = $('<button>');
		$button.text('toggle police response');
		$button.addClass('toggle-button');


		let $response = $('<div>');
		$response.text(`${datum.resolution_description}`);
		$response.addClass("response")
		$response.css("display","none");

		$button.on('click',()=>{
			$response.toggle();
		});

		$entry.append($button);
		$entry.append($response);

		$(location).append($entry);
	}
}

function makeCallForBorough(boroughName, numRecords){
	let prom = $.ajax({
	    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
	    type: "GET",
	    data: {
	      "$limit" : numRecords,
	      "$$app_token" : "lEuTGiMaNd8Jmdy7MwX5HAwDH",
	      borough : boroughName,
	      agency: "NYPD" 
	    }
	});

	return prom;
}