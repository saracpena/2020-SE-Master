window.addEventListener('click', elements);
var x = document.getElementsByClassName("cell");

function elements(){
    for (i = 0; i < x.length; i++){
  x[i].style.backgroundColor = "yellow";
}
}