window.addEventListener("load", run);

function computeSizes (svg) { 
    
    // get the size of the SVG element
    var height = svg.attr("height");
    var width = svg.attr("width");
    var margin = 20;

    // the chart lives in the svg surrounded by a margin of 100px
    return {
    	height:height,
	    width: width,
	    margin: margin,
	    chartHeight: height-2*margin,
	    chartWidth: width-2*margin
	}
}    

function run () {   
    d3.json("../bostonTopo.json", function(error,topology) {
    	drawMap(topology);
    });
}

var width = 650,
	height = 600;

var projection = d3.geo.mercator()
		.scale(1000 * 100)
		.center([-71.06, 42.3201])
		.translate([width/2, height/2]);

var path = d3.geo.path()
	.projection(projection);

var mapSvg = d3.select("#map").append("svg")
	.attr("width", width)
	.attr("height", height);


function drawMap (ca){
	var s = computeSizes(mapSvg);

	// creates boston on the background - optional 
	mapSvg.append("path")
		.datum(topojson.feature(ca, ca.objects.collection))
		.attr("class", "land")
		.attr("d", path)
		.style("fill", "red");

	//bind feature data to the map
	mapSvg.selectAll(".subunit")
		.data(topojson.feature(ca, ca.objects.collection).features)
		.enter()
		.append("path")
		.attr("class", function(d) {  return"subunit " + d.properties.Name; })
		.attr("d", path)
		.on("mouseover", function(d){ 
			div.transition()
				.duration(200)
				.style("opacity", .9)
				.style("cursor","pointer");
			div.html(d.properties.Name)
				.style("left", (d3.event.pageX) + 10 + "px")
				.style("top", (d3.event.pageY - 30) + "px"); 
		})
		.on("mouseout", function(d) { 
			div.transition()
				.duration(500)
				.style("opacity", 0.0);
		})
		.on("click", function(d){
			data_for_req = {"neighborhood": d.properties.Name}
			$.ajax({
			  type: "POST",
			  url: "/api/predict",
			  data: data_for_req
			});
		})

	//tooltip declaration
	var div = d3.select("#map").append("div")
		.attr("class", "tooltip")
		.style("opacity", 0);
}