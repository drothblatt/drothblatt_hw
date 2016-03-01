/*
David Rothblatt
SoftDev pd 3
HW04:  
2016-02-29
*/

var pic = document.getElementById("vimage");

var drawDot = function(x,y){
  var c = document.createElementNS ("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "30"); //radius size has to be a string
  c.setAttribute("fill", "yellow");
  c.setAttribute("stroke", "black");

  c.addEventListener("click", change);

  pic.appendChild(c);    

};

var change = function(e){
  e.preventDefault()l
  this.setAttribute("fill","green");
};

var clicked = function(e){
  if (e.toElement == this){
    drawDot( e.offsetX, e.offsetY );
  }
};

pic.addEventListener( "click", clicked );
