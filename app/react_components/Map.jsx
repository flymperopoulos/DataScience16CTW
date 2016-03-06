var d3Map = require('./d3Map.jsx');

var Map = React.createClass({

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
	 	info = {"neighbourhood":name};
	 	this.props.onPost(info)
	 },

	componentDidUpdate: function(){
		var el = ReactDOM.findDOMNode(this);
		d3Map.update(el, this.props, this.dispatcher)
	},

	render: function() {
		return (
			<div className="Map"></div>
		)
	}
});

module.exports = Map;