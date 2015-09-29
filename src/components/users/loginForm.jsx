"use strict";

var React = require('react');
var Input = require('../common/textInput');

var LoginForm = React.createClass({
	propTypes: {
		credentials: React.PropTypes.object.isRequired,
		onLogin: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	render: function() {
		return (
			<form>
				<h1>Login</h1>
				
				<Input
					type="email"
					name="email"
					label="Email"
					value={this.props.credentials.email}
					onChange={this.props.onChange}
					error={this.props.errors.name} />
					
				<Input
					type="password"
					name="password"
					label="Password"
					value={this.props.credentials.password}
					onChange={this.props.onChange}
					error={this.props.errors.password} />
					
				<input type="submit" 
					value="Login"
					className="button" 
					onClick={this.props.onLogin} />
					
			</form>
		);
	}
});

module.exports = LoginForm;