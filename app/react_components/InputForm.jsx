var RadioGroup = require('react-radio-group')


var InputForm = React.createClass({

	getInitialState: function(){
		return {
			selectedBed: 'Airbed',
			selectedRoom: 'Entire home/apt',
			selectedProperty: 'Apartment'
		}
	},

	onComplete: function(){
		this.props.updateFeatures(this.state)
	},

	onInputChange: function(e){
		var state = {};
		state[e.target.placeholder] = e.target.value;
		this.setState(state)
	},

	onBedChange: function(newBed){
		var newState = this.state;
		newState.selectedBed = newBed;
		this.props.updateFeatures(newState);
		this.setState(newState)
		this.onComplete()
	},

	onRoomChange: function(newRoom){
		var newState = this.state;
		newState.selectedRoom = newRoom;
		this.props.updateFeatures(newState);
		this.setState(newState)
		this.onComplete()
	},

	onPropertyChange: function(newProperty){
		var newState = this.state;
		newState.selectedProperty = newProperty;
		this.props.updateFeatures(newState);
		this.setState(newState)
		this.onComplete()
	},

	submitData: function(){
		console.log("submitData called")
		this.props.submitFeatures()
	},

	render: function(){
		return (
			<div className="input-form">
				<ModelInput
					feature="Beds"
					onInputChange={this.onInputChange}
					onComplete={this.onComplete}
				/>

				<ModelInput
					feature="Bathrooms"
					onInputChange={this.onInputChange}
					onComplete={this.onComplete}
				/>

				<ModelInput
					feature="Accommodates"
					onInputChange={this.onInputChange}
					onComplete={this.onComplete}
				/>

				<ModelInput
					feature="Bedrooms"
					onInputChange={this.onInputChange}
					onComplete={this.onComplete}
				/>

				<RadioGroup name="bed-type" selectedValue={this.state.selectedBed} onChange={this.onBedChange}>
	  				{Radio => (
				    <div>
				      <Radio value="Airbed" />Airbed
				      <Radio value="Couch" />Couch
				      <Radio value="Futon" />Futon
				      <Radio value="Pull-out Sofa" />Pull-out Sofa
				      <Radio value="Real Bed" />Real Bed
				    </div>
				  )}
				</RadioGroup>

				<RadioGroup name="room-type" selectedValue={this.state.selectedRoom} onChange={this.onRoomChange}>
	  				{Radio => (
				    <div>
				      <Radio value="Entire home/apt" />Entire Home/Apartment
				      <Radio value="Private room" />Private Room
				      <Radio value="Shared room" />Shared Room
				    </div>
				  )}
				</RadioGroup>

				<RadioGroup name="property-type" selectedValue={this.state.selectedProperty} onChange={this.onPropertyChange}>
	  				{Radio => (
				    <div>
				      <Radio value="Apartment" />Apartment
				      <Radio value="Private Room" />Private Room
				      <Radio value="Bungalow" />Bungalow
				      <Radio value="Cabin" />Cabin
				      <Radio value="Condominium" />Condominium
				      <Radio value="Dorm" />Dorm
				      <Radio value="House" />House
				      <Radio value="Loft" />Loft
  				      <Radio value="Townhouse" />Townhouse
  				      <Radio value="Villa" />Villa
				    </div>
				  )}
				</RadioGroup>
			</div>
		)
	}

})

var ModelInput = React.createClass({
	render: function(){
		return (
			<input 
				type="text" 
				placeholder={this.props.feature} 
				onChange={this.props.onInputChange} 
				onBlur={this.props.onComplete}
			/>
		)
	}
})


module.exports = InputForm;