var d3Map = require('./d3Map.jsx');

var Map = React.createClass({

	componentDidMount: function() {
		var el = ReactDOM.findDOMNode(this);

		console.log(el);

		d3Map.create(el, {
			width: this.props.width,
			height: this.props.height
		}, this.props)
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