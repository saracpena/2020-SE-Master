
const generateSquares = (numOfSquares) => {
    for (let i = 1; i <= numOfSquares; i++) {
        console.log(i);
        const $square = $('<div>').addClass('square');
        $square.css('background-color', randColorRGB());
        $square.text(i);
        $square.attr('id','square'+i);
        $('body').append($square);
    }
}
$(() => {
    generateSquares(1000);
    $square.attr('id','square'+i);
  });

  const randColorRGB = () => {
	const red = Math.floor( Math.random() * 256);
	const green = Math.floor( Math.random() * 256);
	const blue = Math.floor( Math.random() * 256);
	return 	`rgb(${red},${green},${blue})`;
}