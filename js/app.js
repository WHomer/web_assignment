//Problem: User interaction causes no change to application
//Solution: When user interacts cause changes

var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;
//when clicking on the list items
$(".controls").on("click", "li", function(){
  //deselect sibling elemets
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected")
  //cache current color here
  color = $(".selected").css("background-color");
});
  

//when revealColorSelect is pressed
$("#revealColorSelect").click(function(){
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r +  "," + g + "," + b + ")");
}

//when color sliders change
$("input[type=range]").change(changeColor);

//when add color is pressed 
$("#addNewColor").click(function(){
  //append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select the new color
  $newColor.click();
});
  

//on mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //draw line
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
   mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

























