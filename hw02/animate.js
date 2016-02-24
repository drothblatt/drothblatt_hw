
// David Rothblatt
// SoftDev2 pd3 
// Connecting the Dots 
// 2016-02-11

console.log("loaded js");

// BASIC VARS
var canvas = document.getElementById("canvas");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var ctx = canvas.getContext("2d");
var requestID;

//* outlines the canvas that the user can draw in
function makeBox(x,y,w,h){
    ctx.strokeStyle = "#0000ff";
    ctx.strokeRect(x,y,w,h);
    ctx.stroke();
}
//*

function clearBox(){
    console.log("clear box called");
    ctx.clearRect(0,0,538,538);
    makeBox(0,0,538,538);
}

radius = 0; 
growing = true;

function draw(event){
    clearBox();
    console.log("cleared, drawing");
    //** alterating size of circle
    if (growing){
	radius += 1; 
    } else{
	radius -= 1;
    }
    
    //** altering growing variable
    if (radius == canvas.width/2){
	growing = false;
    }
    if (radius == 0){
	growing = true;
    }

    //* drawing the circle itself
    ctx.beginPath();
    ctx.fillStyle = "#003FFF";
    ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    requestID = window.requestAnimationFrame(draw);
    
}

var stopIt = function(){
    window.cancelAnimationFrame(requestID);
}

makeBox(0,0,538,538);
start.addEventListener("click",draw);
stop.addEventListener("click", stopIt);







