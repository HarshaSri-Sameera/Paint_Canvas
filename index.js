var paintcanvas=
    document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
var isPainting = false; 

function isNumeric (value) {
  return !isNaN(value);
}
function setWidth (value) {
  var canvas = document.getElementById("canvas1");
  if(isNumeric(value))
    {
      paintcanvas.width = value;
    }
}
function setHeight (value) {
  var canvas = 
      document.getElementById("canvas1");
  canvas.height = value;
}
//Creating a default paint shape as circle.
function paintCircle (x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
//mouse movements
function startPaint(X,Y) {
  isPainting = true;
  doPaint(X,Y);
}
function endPaint() {
  isPainting = false;
}
function doPaint(X,Y) {
  if(isPainting == true) 
    {
      paintCircle(X,Y);
    } 
}
//Adding colors
function changeColor(newColor) {
  color=newColor;
}
//brush size
function resizeBrush(newSize) {
  radius = newSize;
document.getElementById("sizeOutput").value = newSize;
}
//clearing the Canvas
function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}
function alertbox() {
  alert(" ⚠ By default the brush size is set to 50 and paint color is set to black.\nTry changing it using the canvas tools down below.\nHappy Painting!")
}
