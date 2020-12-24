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
    //modal.style.display='block'
    //$modal.show() //also works also works as a simplified version of $modal.css('display', 'block');
    //$modal.width()
}

// Event handler to close the modal, this is doing the opposite - changing display to 'none'

const closeModal = () => {
    $modal.css('display', 'none');
    //modal.style.display='none' //
    //$modal.hide() //also works as a simplified version of $modal.css('display', 'none');
}

// Add event listener to About the Game button

$openBtn.on('click', openModal);
document.querySelector('#openModal').addEventListener('click', openModal);


// Add event listener to Close button, 

$closeBtn.on('click', closeModal);




/* Exercise End */

}); 

console.log('javascript:');
const modal = document.querySelector('#modal')
console.log(modal)