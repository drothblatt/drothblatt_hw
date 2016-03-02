/*
David Rothblatt
SoftDev pd 3
HW04:  
2016-02-29
*/

var pic = document.getElementById("vimage");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var intervalID;


var radius = 0; 
var growing = true;

var drawDot = function(x,y){
  var c = document.createElementNS ("http://www.w3.org/2000/svg", "circle");

  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "0"); //radius size has to be a string
  c.setAttribute("fill", "yellow");
  c.setAttribute("stroke", "black");

  var animate = function(){
      c = document.getElementsByTagName("circle")[0];
      radius = parseInt(c.getAttribute("r"));
      //** alterating size of circle
      if (growing){
	  radius += 1; 
      } else{
	  radius -= 1;
      }
      
      //** altering growing variable
      if (radius == 250){
	  growing = false;
      }
      if (radius == 0){
	  growing = true;
      }

      c.setAttribute("r", radius.toString());
      
  };

  intervalID = window.setInterval(animate,16);
  pic.appendChild(c);   
};

var clicked = function(e){
  if (e.toElement == this){
    //drawDot( e.offsetX, e.offsetY );
    drawDot( 250,250 );
  }
};

var stopIt = function(){
    window.clearInterval(intervalID);
};

//pic.addEventListener( "click" , clicked );
//pic.addEventListener( "click" , stopIt );

start.addEventListener( "click", clicked) ;
stop.addEventListener( "click" , stopIt );

