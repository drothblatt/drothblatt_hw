// David Rothblatt
// SoftDev2 pd3 
// Connecting the Dots 
// 2016-02-11

console.log("loaded js");


var playground = document.getElementById("playground");
var button = document.getElementById("clear");
var ctx = playground.getContext("2d");



//* clears the drawing when clear button is clicked
var AddButtonCallback = function(event){
    console.log(event);
    clearDrawing(event);
};

function clearDrawing(event){
    event.preventDefault();
    prevX = undefined; // reset playground
    prevY = undefined;
    ctx.clearRect(0,0,538,538);
    makeBox(0,0,538,538); // remake box
    console.log("cleared");
}
//*

//* outlines the canvas that the user can draw in
function makeBox(x,y,w,h){
    ctx.strokeStyle = "#0000ff";
    ctx.strokeRect(x,y,w,h);
    ctx.stroke();
}
//*



var prevX; // so that lines can be drawn from (prevX,prev Y) --> (x,y)
var prevY;

function draw(event) {
    console.log(prevX + "," +  prevY);
    event.preventDefault();  
    
    var x = event.clientX-10;
    var y = event.clientY-115;
    
    ctx.beginPath();
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#FF0000";
    ctx.fill();    
    ctx.closePath();
    
    if (prevX == undefined && prevY == undefined) { // save old coordinates 
	console.log("prevX and prevY are undefined");
        prevX = x;
        prevY = y;
    } else {	
        console.log("hello?");
        ctx.beginPath();
        ctx.strokeStyle = "#0000ff";
        ctx.moveTo(prevX,prevY);
        ctx.lineTo(x,y);
        ctx.stroke();
        ctx.closePath();
        prevX = x;
        prevY = y;
    }
}


makeBox(0,0,538,538);
button.addEventListener("click", AddButtonCallback);
playground.addEventListener("click", draw);
