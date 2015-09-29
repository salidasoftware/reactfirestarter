"use strict";

var React = require('react');
var Input = require('../common/textInput');

var RegisterForm = React.createClass({
	propTypes: {
		credentials: React.PropTypes.object.isRequired,
		onRegister: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	render: function() {
		return (
			<form>
				<h1>Register</h1>
				
				<Input
					type="email"
					name="email"
					label="Email"
					value={this.props.credentials.email}
					onChange={this.props.onChange}
					error={this.props.errors.email} />
					
				<Input
					type="password"
					name="password"
					label="Password"
					value={this.props.credentials.password}
					onChange={this.props.onChange}
					error={this.props.errors.password} />
					
				<Input
					type="password"
					name="password_confirmation"
					label="Confirm Password"
					value={this.props.credentials.password_confirmation}
					onChange={this.props.onChange}
					error={this.props.errors.password_confirmation} />
					
				<input type="submit" 
					value="Register"
					className="button" 
					onClick={this.props.onRegister} />
					
			</form>
		);
	}
});

module.exports = RegisterForm;