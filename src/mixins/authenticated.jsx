"use strict";

var Firebase = require('firebase');
var FirebaseConfig = require('../constants/firebaseConfig');

var AuthenticatedMixin = {
	statics: {
		willTransitionTo: function(transition){
			var ref = new Firebase(FirebaseConfig.root);
			//https://www.firebase.com/docs/web/api/firebase/getauth.html
			var user = ref.getAuth();
			
			if(!user) {
				transition.redirect("login");
			}
		}
	}
};

module.exports = AuthenticatedMixin;