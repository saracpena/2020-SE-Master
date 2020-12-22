// $('#input-box').val()

//WAY 1:
// $('#submit-btn').on('click' , () => {
//     console.log($('#input-box').val());//show value of what is input on text box
// })

//WAY 2:
// $('form').on('submit', (event) => {//I removed id = submit-btn
//     console.log($('#input-box').val());//show value of what is input on text box
//     event.preventDefault();
// });

//WAY 3:
// $(elem).trigger('reset') not needed here
$('form').on('submit', (e) => {//I removed id = submit-btn
    console.log($('#input-box').val());//show value of what is input on text box
    e.preventDefault();
    $(e.currentTarget).trigger('reset');//resets input field to "placeholder
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