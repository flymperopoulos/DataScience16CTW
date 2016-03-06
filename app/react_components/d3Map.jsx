var EventEmitter = require('events').EventEmitter;

var d3Map = {}

d3Map.create = function(el, props){
	var dispatcher = new EventEmitter();

	var mapSvg = d3.select(el).append('svg')
		.attr('class', 'map')
		.attr('width', props.width)
		.attr('height', props.height);
	return dispatcher
}

d3Map.update = function(el, state, dispatcher) {
  this._drawMap(el, state.data, state.path, dispatcher);
};

d3Map._drawMap = function(el, data, path, dispatcher){
	var map = d3.select(el).selectAll('.map');

	map.selectAll('.subunit')
		.data(topojson.feature(data, data.objects.collection).features)
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
			// data_for_req = {"neighborhood": d.properties.Name}
			dispatcher.emit('point:click', d.properties.Name);
		})

	var div = d3.select("#map").append("div")
		.attr("class", "tooltip")
		.style("opacity", 0);
}

module.exports = d3Map;