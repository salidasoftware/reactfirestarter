"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var HeaderLink = require('./headerLink');
var UserMixin = require('../../mixins/user');

var Header = React.createClass({
	
	mixins: [UserMixin],
	
	render: function(){
		
		var authLink;
		if(this.state.authenticated) {
			authLink = (<HeaderLink to="logout">Logout</HeaderLink>);
		}
		else {
			authLink = (<HeaderLink to="login">Login</HeaderLink>);
		}
		
		return (
		
			<nav className="top-bar" data-topbar role="navigation">
				<ul className="title-area">
					<li className="name">
						<h1><Link to="app">ReactFireStarter</Link></h1>
					</li>
					<li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
				</ul>
				
				<section className="top-bar-section">
					<ul className="right">
						<HeaderLink to="app">Home</HeaderLink>
						<HeaderLink to="things">Things</HeaderLink>
						{authLink}
					</ul>
					
					<ul className="left">
						
					</ul>
				</section>
			</nav>
		
		);
	}
});

module.exports = Header;