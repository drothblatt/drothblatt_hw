var data = [4,8,15,16,23,42];
var data2 = [6,19,8,20,35,62];

var p = document.getElementById("p");
var donkey = document.getElementById("donkey");
var elephant = document.getElementById("elephant");

var create_graph = function(){
    p.innerHTML = "";
    if (donkey.checked && elephant.checked){
	p.innerHTML = "Dem & Rep Delegates: <br>";
	d3stuff(data);
	d3stuff(data2);
    }else if (donkey.checked){
	console.log("donkey");
	p.innerHTML = "Democratic Delegates: <br>";
	d3stuff(data);
    }else if (elephant.checked){
	console.log("elephant");
	p.innerHTML = "Republic Delegates: <br>";
	d3stuff(data2);
    }else{
	p.innerHTML = "Select a party to view delegate chart. <br>";
	d3.select(".chart").selectAll("div").remove();
    }
    console.log("p: " +  p);

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



