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
		this.setState({
			selectedBed: newBed
		})
	},

	onRoomChange: function(newRoom){
		this.setState({
			selectedRoom: newRoom
		})
	},

	onPropertyChange: function(newProperty){
		this.setState({
			selectedProperty: newProperty
		})
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
				      <Radio value="Apartment" />Entire Home/Apartment
				      <Radio value="Bed & Breakfast" />Private Room
				      <Radio value="Boat" />Boat
				      <Radio value="Bungalow" />Bungalow
				      <Radio value="Cabin" />Cabin
				      <Radio value="Castle" />Castle
				      <Radio value="Condominium" />Condominium
				      <Radio value="Dorm" />Dorm
				      <Radio value="Earth House" />Earth House
				      <Radio value="House" />House
				      <Radio value="Hut" />Hut
				      <Radio value="Island" />Island
				      <Radio value="Lighthouse" />Lighthouse
				      <Radio value="Loft" />Loft
				      <Radio value="Other" />Other
  				      <Radio value="Parking Space" />Parking Space
  				      <Radio value="Plane" />Plane
  				      <Radio value="Tent" />Tent
  				      <Radio value="Tipi" />Tipi
  				      <Radio value="Townhouse" />Townhouse
  				      <Radio value="Train" />Train
  				      <Radio value="Treehouse" />Treehouse
  				      <Radio value="Villa" />Villa
  				      <Radio value="Yurt" />Yurt
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