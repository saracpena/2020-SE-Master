// console.log('stranger things are coming');

// $(()=> {
//     const addH2 = () => {
//         let $h2 = $('<h2>').text("Just getting started");
//         $('body').append($h2);
//     }

// addH2();
// });

const promise = $.ajax({
    url: 'http://www.omdbapi.com/apikeu=53aa2cd6&t=Frozen',
});
   
promise.then(
    (data)=>{
        console.log(data);
    },
    ()=>{
       console.log("bad request");
    }
);