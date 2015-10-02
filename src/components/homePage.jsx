"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<h1>React Fire Starter</h1>
				<p></p>
				<h3>A project template for working with Firebase + React</h3>
				<p></p>
				<Link className="button" to="things">See the things &raquo;</Link>
			</div>
		);
	}
});

module.exports = Home;