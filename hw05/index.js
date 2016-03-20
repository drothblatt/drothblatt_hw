var data = [4,8,15,16,23,42];
var data2 = [6,19,8,20,35,62];

var dem = [44,24,35,53,53,32,66,102,91,77,38,67,222,
	   16,95,33,51,25,25,130,36,214,156,71,107,143,
	   75,23,33,16,25,101,86,14,247,55,21,95,189,24,
	   83,29,55,61,475,21,126,34,18,20,20];

var rep = [30,23,50,30,50,28,40,76,42,38,43,58,155,16,49,
	   40,46,46,23,19,32,59,40,19,26,69,72,66,99,52,
	   58,40,42,95,28,16,38,17,19,57,36,34,28,44,172,
	   27,51,24,29];

var p = document.getElementById("p");
var donkey = document.getElementById("donkey");
var elephant = document.getElementById("elephant");

var create_graph = function(){
    d3.select(".chart").selectAll("div").remove();

    console.log("create_graph");
    //console.log(opposite_party.checked);
    //var x = document.getElementById(opposite_party);
    //console.log("x: " + x);
    //x.checked = false;
    p.innerHTML = "";
    if (donkey.checked){
	console.log("donkey");
	p.innerHTML = "Democratic Delegates: <br>  4,763 total Democratic delegates," + 
	    "4,050 pledged delegates & 794 are superdelegates";
	d3stuff(dem);
    }else if (elephant.checked){
	console.log("elephant");
	p.innerHTML = "Republic Delegates: <br> 2,472 total Republican delegates, 1,719 being pledged delegates.";
	d3stuff(rep);
    }
}

var d3stuff = function(data){ 
    d3.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
   	.style("width", function(d) {return d*2 + "px"; })
	.text(function(d) {return d;});
}

donkey.addEventListener('click',create_graph);
elephant.addEventListener('click',create_graph);


console.log(donkey.checked);
console.log(elephant.checked);



