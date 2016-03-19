var data = [4,8,15,16,23,42];
var data2 = [6,19,8,20,35,62];

var div_framework = document.getElementById("div_framework");
var donkey = document.getElementById("donkey");
var elephant = document.getElementById("elephant");

var create_graph = function(){
    if (donkey.checked && elephant.checked){
	d3stuff(data);
	d3stuff(data2);
    }else if (donkey.checked){
	d3stuff(data);
    }else if (elephant.checked){
	d3stuff(data2);
    }else{
	d3.select(".chart").selectAll("div").remove();
    }
}

var d3stuff = function(data){ 
    d3.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
   	.style("width", function(d) {return d*10 + "px"; })
	.text(function(d) {return d;});
}

donkey.addEventListener('click',create_graph);
elephant.addEventListener('click',create_graph);


console.log(donkey.checked);
console.log(elephant.checked);



