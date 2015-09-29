"use strict";

var React = require('react');
var Input = require('../common/textInput');

var ThingForm = React.createClass({
	propTypes: {
		thing: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	render: function() {
		return (
			<form>
				<h1>Manage Thing</h1>
				
				<Input
					type="text"
					name="name"
					label="Name"
					value={this.props.thing.name}
					onChange={this.props.onChange}
					error={this.props.errors.name} />
					
				<input type="submit" 
					value="Save"
					className="button" 
					onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = ThingForm;