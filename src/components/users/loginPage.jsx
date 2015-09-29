"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var FirebaseConfig = require('../../constants/firebaseConfig');
var LoginForm = require('./loginForm');
var AnonymousMixin = require('../../mixins/anonymous');
var toastr = require('toastr');

var LoginPage = React.createClass({
	
	mixins: [Router.Navigation, ReactFireMixin, AnonymousMixin],

	componentWillMount: function() {
		
	},
	
	getInitialState: function() {
		return {
			credentials: { email: '', password: '' },
			errors: {}
		};
	},
	
	login: function(event) {
		event.preventDefault();
		var _this = this;
		
		var ref = new Firebase(FirebaseConfig.root);
		ref.authWithPassword(
			{
				email    : this.state.credentials.email,
				password : this.state.credentials.password
			},
			function(error, userData) {
				if (error) {
					toastr.error("Login failed. "+error);
					this.setState({errors: this.state.errors});
				} else {
					toastr.success("Login successful.");
					_this.transitionTo('app');
				}
			}
		);
	},
	
	setCredentialsState: function() {
		var field = event.target.name;
		var value = event.target.value;
		this.state.credentials[field] = value;
		return this.setState({credentials: this.state.credentials});
	},
		
	render: function() {
		return (
			<div>
				<LoginForm
					credentials={this.state.credentials}
					onLogin={this.login}
					onChange={this.setCredentialsState}
					errors={this.state.errors} />
				<Link to="register" className="button">Register</Link>
			</div>
		);
	}
});

module.exports = LoginPage;