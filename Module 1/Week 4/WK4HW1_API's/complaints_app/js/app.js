//ADDED NEW

$(() => {
	$('form').on('click', (e) => {
	  e.preventDefault();
	  // This will grab the user input
	  let userInput = $('input[type="number"]').val();
	  const button = $(e.target).val();
	  console.log(button.toUpperCase());
	  if (userInput < 1) {
		userInput = 10;
	  }
  
	  console.log(button);
	  //Reset the ordered list if the burough buttton is clicked but ignore the NYPD response button
	  if (button != 'NYPD Response') {
		$('ol').html(``);
	  }
  
	  $.ajax({
		url:
		  'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' +
		  button.toUpperCase(),
	  }).then(
		(data) => {
		  // This will print the number of complaints that are input
		  var count = 0;
		  for (let index = 0; index < data.length; index++) {
			if (data[index].agency == 'NYPD' && count < Number(userInput)) {
			  count++;
			  $('ol').append(`
			<li>
			<strong>Borough</strong><span id="borough">${
			  data[index].borough
			}</span>
			<br>
			<strong>Descriptor</strong>:<span id="descriptor">${
			  data[index].descriptor
			}</span>
			<br>
			<strong>Agency</strong>:<span id="agency">${data[index].agency}</span>
			<br>
			<div ><strong>Resolution description</strong>:<span><br><section>${
			  data[index].resolution_description
			}</section></span></div>
			<input type="submit" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-warning" id="bit">
			</li>
			
			<hr>
			`);
  
			  console.log(data[index]);
			}
		  }
		},
		() => {
		  // Output a bad request
		  console.log('Bad Request');
		}
	  );
	});
  });
  // This function will animation the click of the NYPD response
  function response(x) {
	var myNodelist = document.querySelectorAll('div');
	console.log(x);
	$(myNodelist[x]).animate(
	  {
		height: 'toggle',
	  },
	  'slow'
	);
  }
  
  // //NEW
  
  // // references:
  // // .then vs .done: https://stackoverflow.com/a/34422715
  
  // console.log("executing app.js");
  
  // // Main function that runs the app
  // $(() => {
  // 	$("#search-button").on('click',()=>{
  // 		// clear divs
  // 		for (const div of $(".results")){
  // 			div.innerHTML = "";
  // 		}
  
  // 		// check if user has entered a number in the box
  // 		let numRequests = 10;
  // 		if($("#num-requests")[0].value){
  // 			numRequests = $("#num-requests")[0].value;
  // 		}
  
  // 		// make list of selected boroughs
  // 		let requestedBoroughs = [];
  // 		for (const boroughInput of $("#borough-selectors > input:checked")){
  // 			let id = boroughInput.getAttribute("id");
  //             let boroughName = $(`label[for='${id}']`)[0].innerText.toUpperCase();
  //             requestedBoroughs.push(boroughName);
  // 		}
  
  // 		// could this work? https://api.jquery.com/each/
  // 		// $("#borough-selectors > input:checked").each((item) =>{
  // 		// 	console.log($(this).prev());
  // 		// });
  
  // 		// for each selected borough make ajax call and print to div
  // 		for (const boroughName of requestedBoroughs) {
  // 			makeCallForBorough(boroughName,numRequests)
  // 				.then((data) => {
  // 					let boroughNameFormattedForId = 
  // 						boroughName.toLowerCase().split(" ").join("-");
  
  // 					let displayDivId = `#${boroughNameFormattedForId}-results`;
  // 					displayData(displayDivId,data);
  // 				});
  // 		}
  // 	});
  
  
  // 	});
  
  // 	// makeCallForBorough("BRONX",10)
  // 	// 	.then(function(data) {
  // 	// 		displayData("#bronx-results",data);
  // 	// 		console.log(data);
  // 	// 	});
  
  
  // function displayData(location,data) {
  // 	$(location).append(`<h3>${location.slice(1)}</h3>`);
  // 	for (const datum of data){
  // 		let $entry = $('<div>');
  // 		$entry.text(`${datum.complaint_type}: ${datum.descriptor}`);
  
  // 		let $button = $('<button>');
  // 		$button.text('toggle police response');
  // 		$button.addClass('toggle-button');
  
  
  // 		let $response = $('<div>');
  // 		$response.text(`${datum.resolution_description}`);
  // 		$response.css("display","none");
  
  // 		$button.on('click',()=>{
  // 			$response.toggle();
  // 		});
  
  // 		$entry.append($button);
  // 		$entry.append($response);
  
  // 		$(location).append($entry);
  // 	}
  // }
  
  // function makeCallForBorough(boroughName, numRecords){
  // 	let prom = $.ajax({
  // 	    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
  // 	    type: "GET",
  // 	    data: {
  // 	      "$limit" : numRecords,
  // 	      "$$app_token" : "lEuTGiMaNd8Jmdy7MwX5HAwDH",
  // 	      borough : boroughName,
  // 	      agency: "NYPD" 
  // 	    }
  // 	});
  
  // 	return prom;
  // // }
  
  
  
  
  
  
  // // let key = ''
  // // let movieTitle = ''
  
  // $(()=> {
  //     $('form').on('click', (event)=>{
	
  //       event.preventDefault();
  //       console.log(event);
	
  //       const userInput = $(event.target).val();
  //   console.log(userInput);
  //   $.ajax({
  //         url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=?complaint_type=?complaint_type=' + userInput,
  //       }).then(
  //         (data) =>{
  //           console.log(data);
  //           $('#borough').html(data.borough)
  //           $('#complaints').html(data.complaint_type)
  //         },
  //         ()=>{
  //           console.log("bad request");
  //         }
  //       );
  //     })
  //   })
  
  
  // // ?complaint_type=
  
  
  // // $(()=> {
  // //     $('form').on('click', (event) => {
		  
  // //         event.preventDefault()//event represents type of action the user made
		  
  // //         const userInput = $(event.target).val();
		  
  // //         const promise = $.ajax({
  // //             url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' + userInput,
  // //         })
		  
  // //         promise.then(
  // //             (data) => {
  // //                 console.log(data)
  // //                 $('#borough').html(data.Borough)
  // //                 $('#complaints').html(data.Year)
  // //                 $('#rated').html(data.Rated)
  // //                 $('#year').html(data.Year)
  // //                 $('#rated').html(data.Rated)
  // //             },
  // //             () => {
  // //                 console.log('bad request')
  // //             }
  // //         )
  // //     })
  // // })
  
  // // //MANHATTAN
  // // //?complaint_type=








// references:
// .then vs .done: https://stackoverflow.com/a/34422715

// console.log("executing app.js");

// Main function that runs the app
		// could this work? https://api.jquery.com/each/
		// $("#borough-selectors > input:checked").each((item) =>{
		// 	console.log($(this).prev());
		// });

		// for each selected borough make ajax call and print to div
	// 	for (const boroughName of requestedBoroughs) {
	// 		makeCallForBorough(boroughName,numRequests)
	// 			.then((data) => {
	// 				let boroughNameFormattedForId = 
	// 					boroughName.toLowerCase().split(" ").join("-");

	// 				let displayDivId = `#${boroughNameFormattedForId}-results`;
	// 				displayData(displayDivId,data);
	// 			});
	// 	}
	// });


	// });

// 	makeCallForBorough("BRONX",10)
// 		.then(function(data) {
// 			displayData("#bronx-results",data);
// 			console.log(data);
// 		});


// function displayData(location,data) {
// 	let headingName = location.slice(1).split("-").join(" ");
// 	$(location).append(`<h3 class="borough-heading">${headingName}</h3>`);

// 	for (const datum of data){
// 		let $entry = $('<div>');
// 		$entry.addClass('entry');
// 		$entry.append(
// 			`<span class="description"> ${datum.complaint_type}: ${datum.descriptor}</span>`);

// 		let $button = $('<button>');
// 		$button.text('toggle police response');
// 		$button.addClass('toggle-button');


// 		let $response = $('<div>');
// 		$response.text(`${datum.resolution_description}`);
// 		$response.addClass("response")
// 		$response.css("display","none");

// 		$button.on('click',()=>{
// 			$response.toggle();
// 		});

// 		$entry.append($button);
// 		$entry.append($response);

// 		$(location).append($entry);
// 	}
// }

// function makeCallForBorough(boroughName, numRecords){
// 	let prom = $.ajax({
// 	    url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json",
// 	    type: "GET",
// 	    data: {
// 	      "$limit" : numRecords,
// 	      "$$app_token" : "lEuTGiMaNd8Jmdy7MwX5HAwDH",
// 	      borough : boroughName,
// 	      agency: "NYPD" 
// 	    }
// 	});

// 	return prom;
// }