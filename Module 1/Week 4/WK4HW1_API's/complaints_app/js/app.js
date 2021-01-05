//ADDED NEW

$(() => { // https://learn.jquery.com/using-jquery-core/document-ready/
  $('input[type="button"]').on("click", (e) => {
    // e.preventDefault();// eliminates page refresh
    // This will grab the user input
    let userInput = $('input[type="number"]').val();
    const button = $(e.target).val();
    console.log(button.toUpperCase());
    if (!userInput) {// if there's no input then,
      userInput = 10;//! If the user doesn't input any number, make the default be 10
    }

    console.log(button); 
    //Reset the ordered list if the burough buttton is clicked but ignore the NYPD response button
    $("ol").html(``);

    $.ajax({
      url:
        "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=" + button.toUpperCase(),
    }).then(
      (data) => {
        // This will print the number of complaints that are input
		var count = 0;
		console.log(userInput);
        for (let index = 0; index < data.length; index++) {
          if (data[index].agency == "NYPD" && count < Number(userInput)) { //!filter by agency NYPD
            count++;
            $("ol").append(`
			<li>
			<strong>Borough</strong>
			<span class="borough">${data[index].borough}</span><br>
			
			<strong>Descriptor</strong>:
			<span class="descriptor">${data[index].descriptor}</span><br>
			
			<strong>Agency</strong>:
			<span class="agency">${data[index].agency}</span><br> 
			
			<div><strong>Resolution description</strong>:
			<section>${data[index].resolution_description}</section>
			</div>
			<input type="button" value="NYPD Response" onclick="response(${count.toString()})" class="btn btn-warning" id="bit">
			</li>
			
			<hr>
			`);//!create button "toggle police response"

            console.log(data[index].unique_key);
          }
        }
      },
      () => {
        // Output a bad request
        console.log("Bad Request");
      }
    );
  });
});
// This function will animate the click of the NYPD response
function response(x) {
  var myNodelist = document.querySelectorAll("div");
  console.log(x);
  $(myNodelist[x]).animate(
    {
      height: "toggle",
    },
    "slow"
  );
}