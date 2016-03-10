var ResultDisplay = React.createClass({
	render: function(){
		return (
			<div className="results-display">
				<h2>Price Prediction:</h2>
				<p>{this.props.prediction}</p>
			</div>
		)
	}
})

module.exports = ResultDisplay