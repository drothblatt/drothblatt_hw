// David Rothblatt
// SoftDev2 pd3 
// Connecting the Dots 
// 2016-02-11

console.log("loaded js");


var playground = document.getElementById("playground");
var go = document.getElementById("circle");
var ctx = playground.getContext("2d");


//* outlines the canvas that the user can draw in
function makeBox(x,y,w,h){
    ctx.strokeStyle = "#0000ff";
    ctx.strokeRect(x,y,w,h);
    ctx.stroke();
}
//*

growing = true;

function animate(event){
    event.preventDefault();
    ctx.clearRect(0,0,538,538);
    console.log("cleared");
    //** alterating size of circle
    if (growing){
	radius += 1; 
    } else{
	radius -= 1;
    }
    
    //** altering growing variable
    if (radius == playground.width/2){
	growing = false;
    }
    if (radius == 0){
	growing = true;
    }

    //* drawing the circle itself


}


makeBox(0,0,538,538);
go.addEventListener("click", animate);
stop.addEventListener("click", stop);
