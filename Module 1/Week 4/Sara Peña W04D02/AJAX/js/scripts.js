let key = '53aa2cd6'
let movieTitle = 'Mad Max: Fury Road'
$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
        const userInput = $('input[type="text"]').val()
        const promise = $.ajax({
            url: `http://www.omdbapi.com/?apikey=${key}&t=${userInput}`
        })
        
        promise.then(
            (data) => {
                console.log(data)
                $('#title').html(data.Title)
                $('#year').html(data.Year)
                $('#rated').html(data.Rated)
            },
            () => {
                console.log('bad request')
            }
        )
    })
})