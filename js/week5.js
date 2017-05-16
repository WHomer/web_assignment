
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var requestAnimationFrame = window.requestAnimationFrame;

function init() {

  requestAnimationFrame(draw);
}

function draw() {

    context.beginPath();
    centerX = canvas.width * Math.random();
    centerY = canvas.height * Math.random();
    radius = 100 * Math.random();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = getRandomColor();
    context.fill();

    requestAnimationFrame(draw);
  }


//random color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

