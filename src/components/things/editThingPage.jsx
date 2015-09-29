"use strict";

var React = require('react');
var Router = require('react-router');
var ThingForm = require('./thingForm');
var toastr = require('toastr');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var FirebaseConfig = require('../../constants/firebaseConfig');
var AuthenticatedMixin = require('../../mixins/authenticated');

var EditThingPage = React.createClass({
	mixins: [
		Router.Navigation,
		ReactFireMixin,
		AuthenticatedMixin
	],
	statics: {
		willTransitionFrom: function(transition, component){
			if(component.state.dirty && !confirm("Leave without saving?")) {
				transition.abort();
			}
		}
	},
	getInitialState: function() {
		return {
			thing: { name: '' },
			errors: {},
			dirty: false
		};
	},
	componentWillMount: function() {
		var thingKey = this.props.params.key;
		if(thingKey) {
			var ref = new Firebase(FirebaseConfig.root+"things/"+thingKey);
  			this.bindAsObject(ref, "thing");
		}
	},
	setThingState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.thing[field] = value;
		return this.setState({thing: this.state.thing});
	},
	thingFormIsValid: function() {
		var formIsValid = true;
		this.state.errors = {};
		if(this.state.thing.name.length == 0) {
			this.state.errors.firstName = 'Thing name is required';
			formIsValid = false;
		}
		this.setState({errors: this.state.errors});
		return formIsValid;		
	},
	saveThing: function(event) {
		event.preventDefault();
		if(!this.thingFormIsValid()){
			return;
		}
		if(this.state.thing['.key']) {
			var thingRef = new Firebase(FirebaseConfig.root+"things/"+this.state.thing['.key']);
			var key = this.state.thing['.key'];
			delete this.state.thing['.key'];
			thingRef.set(this.state.thing);
			this.state.thing['.key'] = key;
		}
		else {
			var thingsRef = new Firebase(FirebaseConfig.root+"things");
			var newThingRef = thingsRef.push().set(this.state.thing);
		}
		toastr.success("Thing saved.");
		this.setState({dirty: false});
		this.transitionTo('things');
	},
	render: function() {
		return (
			<ThingForm 
				thing={this.state.thing} 
				onChange={this.setThingState}
				onSave={this.saveThing} 
				errors={this.state.errors} />
		);
	}
});

module.exports = EditThingPage;