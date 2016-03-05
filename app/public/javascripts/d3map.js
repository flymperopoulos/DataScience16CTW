var EventEmitter = require('events').EventEmitter;

var d3Map = {}

var projection = d3.geo.mercator()
		.scale(1000 * 100)
		.center([-71.06, 42.3201])
		.translate([width/2, height/2]);

var path = d3.geo.path()
	.projection(projection);


d3Map.create = function(el, props, state){
	var mapSvg = d3.select(el).append('svg')
		.attr('width', props.width)
		.attr('height', props.height);

	this.update(el, state);
}

d3Map.update = function(el, state) {
  // Re-compute the scales, and render the data points
  this._drawMap(el, state.data);
};

d3Map._drawMap = function(el, data){
	el.append('path')
		.datum(topojson.feature(data, data.objects.collection).features)
		.enter()
		.append('path')
		.attr('class', function(d) { return 'subunit ' + d.properties.Name; })
		.attr('d', path)
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
}