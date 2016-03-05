var Map = require('./Map.jsx');

var global = {}

global.width=650
global.height=600

var projection = d3.geo.mercator()
		.scale(1000 * 100)
		.center([-71.06, 42.3201])
		.translate([global.width/2, global.height/2]);

var path = d3.geo.path()
	.projection(projection);

global.path = path;

d3.json("/data/bostonTopo.json", function(error,topology) {
	global.data = topology;
});

var App = React.createClass({
	getInitialState: function() {
		var data;
		d3.json(this.props.data, function(error,topology) {
			data = topology;
		});

	    return {
    		data: data
	    };
	},

	render: function() {
		return (
			<div className="App">
				<Map
					data={this.state.data}
					path={this.props.path} 
					width={this.props.width}
					height={this.props.height}
				/>
			</div>
		)
	}
});

ReactDOM.render(
  <App data='/data/bostonTopo.json' path={global.path} height={global.height} width={global.width}/>,
  document.getElementById('content')
);