"use strict";

var React = require('react');
var ThingList = require('./thingList');
var Router = require('react-router');
var Link = Router.Link;
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var FirebaseConfig = require('../../constants/firebaseConfig');
var AuthenticatedMixin = require('../../mixins/authenticated');

var ThingsPage = React.createClass({
	
	mixins: [ReactFireMixin, AuthenticatedMixin],

	componentWillMount: function() {
		var ref = new Firebase(FirebaseConfig.root+"things");
  		this.bindAsArray(ref, "things");
	},
		
	render: function() {
		return (
			<div>
				<h1>Things</h1>
				<ThingList things={this.state.things} />
				<Link to="addThing" className="button">Add Thing</Link>
			</div>
		);
	}
});

module.exports = ThingsPage;