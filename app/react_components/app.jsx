var Map = require('./Map.jsx');
var InputForm = require('./InputForm.jsx')
var ResultDisplay = require('./ResultDisplay.jsx')

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
    		data: {},
    		prediction: ''
	    };
	},

	updateFeatures: function(newFeatures){
		this.setState({
			features: newFeatures
		})
	},

	componentDidMount: function(){
		d3.json(this.props.data, function(error,topology) {
			this.setState({data: topology});
		}.bind(this));
	},

	submitFeatures: function(neighbourhood){
		var data = this.state.features;
		data.neighbourhood = neighbourhood;
		console.log("Submitting info");
		this.postInformation(data);
	},

	postInformation: function(d){
		$.ajax({
		  type: "POST",
		  url: "/api/predict",
		  data: d,
		  success: function(res){
			this.setState({prediction: res.prediction})
		  }.bind(this),
		  error: function(err){
		  	console.log(err);
		  }
		});
	},

	render: function() {
		return (
			<div className="App">
				<InputForm
					updateFeatures={this.updateFeatures}
					submitFeatures={this.submitFeatures}
				/>

				<Map
					data={this.state.data}
					path={this.state.path} 
					width={this.state.width}
					height={this.state.height}
					onPost = {this.submitFeatures}
				/>

				<ResultDisplay
					prediction={this.state.prediction}
				/>
			</div>
		)
	}
});

ReactDOM.render(
  <App data='/data/bostonTopo.json' path={global.path} height={global.height} width={global.width}/>,
  document.getElementById('content')
);

