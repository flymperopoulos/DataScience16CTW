var d3Map = require('./d3Map.jsx');

var Map = React.createClass({

	// componentDidMount: function() {
	// 	var el = ReactDOM.findDOMNode(this);

	// 	console.log(el);
	// 	if (Object.keys(this.props.data).length>0){
	// 		d3Map.create(el, {
	// 			width: this.props.width,
	// 			height: this.props.height, 
	// 			path: this.props.path
	// 		}, this.props)
	// 	}	
	// },
	dispatcher: null,

	componentDidMount: function() {
		var el = ReactDOM.findDOMNode(this);
	    var dispatcher = d3Map.create(el, {
	      width: this.props.width,
	      height: this.props.height
	    });

	    dispatcher.on('point:click', this.postInformation);
	    this.dispatcher = dispatcher;
	 },

	 postInformation: function (name) {
	 	info = {"neighbourhood":name}
	 	$.ajax({
	 	  type: "POST",
	 	  url: "/api/predict",
	 	  data: info,
	 	  success: function(){
	 	  	// TODO: pass state param to change view accordingly with res
	 	  	console.log("successfully posted neighbourhood info")
	 	  }
	 	});
	 },

	componentDidUpdate: function(){
		var el = ReactDOM.findDOMNode(this);
		d3Map.update(el, this.props, this.dispatcher)
	},

	getMapState: function() {
		console.log(this.props)
	},

	render: function() {
		return (
			<div className="Map"></div>
		)
	}
});

module.exports = Map;