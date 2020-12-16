console.log('stranger things are coming');

$(()=> {
    const addH2 = () => {
        let $h2 = $('<h2>').text("Just getting started");
        $('body').append($h2);
    }
}

addH2();