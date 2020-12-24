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
const list = [];
//this is called: EVENT HANDLER: $(.submit).on(‘click, function() { code }
$('form').on('submit', (e) => {
    console.log($('#input-box-fn').val());

    list.push($('#input-box-fn').val());
    // list.push($('#input-box-mn').val());
    // list.push($('#input-box-ln').val());
    console.log(list); //test it
    e.preventDefault();

    $(e.currentTarget).trigger('reset');
    render();
});

const render = () => { //prints the item
    // console.log('list:', list);
    // $('ul').empty();
    // list.forEach((item) => { //it iterates the array
    //     console.log(item);
    $('ul').append('<li>' + list[list.length - 1] + '</li>');
    // });
    $('li').on('click', (e) => {

        $(e.currentTarget).css('text-decoration', 'line-through');
        $(e.currentTarget).effect('shake');
    })
}