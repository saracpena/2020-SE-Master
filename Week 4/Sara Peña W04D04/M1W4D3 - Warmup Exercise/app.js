$(() => {

/* Exercise Begin */

// Grabbing About the Game button

const $openBtn = $('#openModal');
console.log($openBtn);
// const openBtn = document.querySelector('#openModal')

// Grabbing Modal element

const $modal = $('#modal');
console.log($modal);
// const modal = document.querySelector('#modal')

// Grabbing close button

const $closeBtn = $('#close');
console.log($closeBtn);


// Event handler to open the modal, when this runs "Learn to play bridge" <div> will show up

const openModal = () => {
    $modal.css('display', 'block');
    //$modal.show() also works
}

// Event handler to close the modal, this is doing the opposite - changing display to 'none'

const closeModal = () => {
    $modal.css('display', 'none');
    //$modal.hide() also works
}

// Add event listener to About the Game button

$openBtn.on('click', openModal);


// Add event listener to Close button, 

$closeBtn.on('click', closeModal);




/* Exercise End */

}); 

console.log('javascript:');
const modal = document.querySelector('#modal')
console.log(modal)