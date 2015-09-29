"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var UserMixin = require('../../mixins/user');

var Header = React.createClass({
	
	mixins: [UserMixin],
	
	render: function(){
		
		var authLink;
		if(this.state.authenticated) {
			authLink = (<li><Link to="logout" className="button">Logout</Link></li>);
		}
		else {
			authLink = (<li><Link to="login" className="button">Login</Link></li>);
		}
		
		return (
		
			<div className="row">
				<div className="large-3 columns">
				<h1>
					<Link to="app">
						<img src="http://placehold.it/400x100&text=Logo" />
					</Link>
				</h1>
				</div>
				<div className="large-9 columns">
				<ul className="button-group right">
					<li><Link to="app" className="button">Home</Link></li>
					<li><Link to="things" className="button">Things</Link></li>
					{authLink}
				</ul>
				</div>
			</div>
		
		);
	}
});

module.exports = Header;