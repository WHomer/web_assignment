/*
var c = document.getElementById("canvas");
var canvas = c.getContext("2d");

//draw circle
canvas.beginPath();
canvas.arc(150,75,50,0,1.5*Math.PI);
canvas.stroke();
canvas.beginPath();
canvas.strokeStyle="red";
//canvas.arc(150,75,50,90,1.8*Math.PI);
canvas.stroke();




//listener to clear canvas
var clearCanvas = document.getElementById('clearCanvas');
clearCanvas.addEventListener("click", eraseCanvas);

//function to add class to clearCanvas id
function eraseCanvas() {
  document.getElementById('myDiv').classList.add('clearCanvas');
  clearCanvas.classList.add('hide');
}

*/

//^^^^^^^^^^^^^^ OLD CODE
//grab and store js-square-container
var squareContainer = document.getElementById('js-square-container');

function breakFunction() {
  //create additional redSquares
  for (var i=1; i <= 10; i++){
    var square = document.createElement('div');
    //apply class name to square
    square.className = 'square';
    //get random number
    var num = Math.ceil(Math.random()*10);

    //apply inline style to square
    square.style.animation = 'squareFall' + num +' 4s';

    squareContainer.appendChild(square);
  }
}


//tie the event to the button.
document.getElementById('break').addEventListener('click', breakFunction);


