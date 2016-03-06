var Map = require('./Map.jsx');

var App = React.createClass({
	getInitialState: function() {	
		
		var width = 650;
		var height = 600;
		var projection = d3.geo.mercator()
				.scale(1000 * 100)
				.center([-71.06, 42.3201])
				.translate([width/2, height/2]);

		var path = d3.geo.path()
			.projection(projection);

	    return {
	    	width : width, 
	    	height : height,
	    	path : path,
    		data: {}
	    };
	},
	componentDidMount: function(){
		d3.json(this.props.data, function(error,topology) {
			this.setState({data: topology});
		}.bind(this));
	},

	postInformation: function(d){
		$.ajax({
		  type: "POST",
		  url: "/api/predict",
		  data: d,
		  success: function(){
		  	// TODO: pass state param to change view accordingly with res
		  	console.log("successfully posted neighbourhood info")
		  }
		});
	},

	render: function() {
		return (
			<div className="App">
				<Map
					data={this.state.data}
					path={this.state.path} 
					width={this.state.width}
					height={this.state.height}
					onPost = {this.postInformation}
				/>
			</div>
		)
	}
});

ReactDOM.render(
  <App data='/data/bostonTopo.json' path={global.path} height={global.height} width={global.width}/>,
  document.getElementById('content')
);

