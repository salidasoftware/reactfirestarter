"use strict";

var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');
var FirebaseConfig = require('../../constants/firebaseConfig');
var UserMixin = require('../../mixins/user');

var LogoutPage = React.createClass({
	
	mixins: [UserMixin, Router.Navigation],

	componentWillMount: function() {
		//logout comes from UserMixin
		this.logout();
		this.transitionTo('login');
	},
	
	render: function() {
		return (
			<div>
				Logging out...
			</div>
		);
	}
});

module.exports = LogoutPage;