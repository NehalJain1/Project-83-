var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "" ;
var last_position_of_mouse_X;
var last_position_of_mouse_Y;
var colour = "red";
var lineWidth = 7;
var screen_width = screen.width;
var new_canvas_W = screen.width - 80;
var new_canvas_H = screen.height - 300;

if (screen_width < 992){
  document.getElementById("myCanvas").width = new_canvas_W;
  document.getElementById("myCanvas").height = new_canvas_H;
  document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",touchstart);
function touchstart(event) {
mouseevent = "touchstart";
console.log( "the mouse event is",mouseevent);

//get the value from html for colour and lineWidth
colour = document.getElementById("colour").value;
lineWidth = document.getElementById("LineWidth").value;
console.log(event);
last_position_of_mouse_X = event.touches[0].clientX - canvas.offsetLeft;
last_position_of_mouse_Y  = event.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(event) {
console.log(event);
 mouse_x = event.clientX - canvas.offsetLeft;
 mouse_y = event.clientY - canvas.offsetTop;
 ctx.strokeStyle = colour; 
 ctx.lineWidth = lineWidth;
 ctx.beginPath();
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(event) {
console.log(event);
 mouse_x = event.clientX - canvas.offsetLeft;
 mouse_y = event.clientY - canvas.offsetTop;
 ctx.strokeStyle = colour; 
 ctx.lineWidth = lineWidth; 
 ctx.beginPath();
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(event) {
  console.log(event);
   mouse_x = event.clientX - canvas.offsetLeft;
   mouse_y = event.clientY - canvas.offsetTop;
   ctx.strokeStyle = colour; 
   ctx.lineWidth = lineWidth; 
   ctx.beginPath();
}
  canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(event) {
  console.log(event);
   mouse_x = event.clientX - canvas.offsetLeft;
   mouse_y = event.clientY - canvas.offsetTop;
   ctx.strokeStyle = colour; 
   ctx.lineWidth = lineWidth; 
   ctx.beginPath();
  }

  //touchmove
  
//mousemove + mousedown
canvas.addEventListener("touchmove",touchmove);

function touchmove(event) 
{
current_position_of_mouse_X = event.touches[0].clientX - canvas.offsetLeft;
current_position_of_mouse_Y  = event.touches[0].clientY - canvas.offsetTop;

    ctx.strokeStyle = colour; //pen colour
    ctx.lineWidth = lineWidth; //Pen width
    ctx.beginPath();//Take the pen and start
    //to show in console
    console.log("last-position_of_X,Y");
console.log("x = "+ last_position_of_mouse_X + "Y = "+ last_position_of_mouse_Y );
ctx.moveTo(last_position_of_mouse_X,last_position_of_mouse_Y);

console.log("current-position_of_X,Y");
console.log("x = "+ current_position_of_mouse_X + "Y = "+ current_position_of_mouse_Y );
ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
ctx.stroke();
last_position_of_mouse_X = current_position_of_mouse_X;
last_position_of_mouse_Y = current_position_of_mouse_Y;
}
