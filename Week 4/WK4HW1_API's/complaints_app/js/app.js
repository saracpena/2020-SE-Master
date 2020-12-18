// let key = ''
// let movieTitle = ''

$(()=> {
    $('form').on('click', (event)=>{
  
      event.preventDefault();
      console.log(event);
  
      const userInput = $(event.target).val();
  console.log(userInput);
  $.ajax({
        url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=?complaint_type=?complaint_type=' + userInput,
      }).then(
        (data) =>{
          console.log(data);
          $('#borough').html(data.borough)
          $('#complaints').html(data.complaint_type)
        },
        ()=>{
          console.log("bad request");
        }
      );
    })
  })


// ?complaint_type=


// $(()=> {
//     $('form').on('click', (event) => {
        
//         event.preventDefault()//event represents type of action the user made
        
//         const userInput = $(event.target).val();
        
//         const promise = $.ajax({
//             url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' + userInput,
//         })
        
//         promise.then(
//             (data) => {
//                 console.log(data)
//                 $('#borough').html(data.Borough)
//                 $('#complaints').html(data.Year)
//                 $('#rated').html(data.Rated)
//                 $('#year').html(data.Year)
//                 $('#rated').html(data.Rated)
//             },
//             () => {
//                 console.log('bad request')
//             }
//         )
//     })
// })

// //MANHATTAN
// //?complaint_type=