"use strict";

var Firebase = require('firebase');
var FirebaseConfig = require('../constants/firebaseConfig');

var UserMixin = {

	logout: function() {
		var ref = new Firebase(FirebaseConfig.root);
		ref.unauth();
	},

	setUserState: function(context) {
		var ref = new Firebase(FirebaseConfig.root);
		//https://www.firebase.com/docs/web/api/firebase/getauth.html
		var user = ref.getAuth();
		this.setState({user: user, authenticated: user != null});
	},

	componentWillMount: function() {
		this.setUserState();
		var ref = new Firebase(FirebaseConfig.root);
		ref.onAuth(this.setUserState);
	},
	
	componentWillUnmount: function() {
		var ref = new Firebase(FirebaseConfig.root);
		ref.offAuth(this.setUserState);
	}
};

module.exports = UserMixin;