// Way 1
// $('#submit-btn').on('click', () => {
//   console.log($('#input-box').val());
// });

// Way 2
// $('form').on('submit', (event) => {
//   console.log($('#input-box').val());
//   event.preventDefault();
// });

// Way 3
$('form').on('submit', (e) => {
    console.log($('#input-box-fn').val());
    e.preventDefault();
    $(e.currentTarget).trigger('reset');
  });


// console.log('stranger things are coming');

// $(()=> {
//     const addH2 = () => {
//         let $h2 = $('<h2>').text("Just getting started");
//         $('body').append($h2);
//     }

// addH2();
// });

// // const promise = $.ajax({
// //     url: 'http://www.omdbapi.com/apikeu=53aa2cd6&t=Frozen',
// // });
   
// // promise.then(
// //     (data)=>{
// //         console.log(data);
// //     },
// //     ()=>{
// //        console.log("bad request");
// //     }
// // );

// //API is like a username/password
// //AJAX code currently not working 12/18 @ 10:45am

// // let key = '53aa2cd6'
// // let movieTitle = 'Mad Max: Fury Road'
// // $(() => {
// //     $('form').on('submit', (event) => {
// //         event.preventDefault()
// //         const userInput = $('input[type="text"]').val()
// //         const promise = $.ajax({
// //             url: `http://www.omdbapi.com/?apikey=${key}&t=${userInput}`
// //         })
        
// //         promise.then(
// //             (data) => {
// //                 console.log(data)
// //                 $('#title').html(data.Title)
// //                 $('#year').html(data.Year)
// //                 $('#rated').html(data.Rated)
// //             },
// //             () => {
// //                 console.log('bad request')
// //             }
// //         )
// //     })
// // })