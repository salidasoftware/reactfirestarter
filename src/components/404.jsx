"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
	render: function(){
		return (
			<div>
				<h1>What Did You Do!</h1>
				<p>Maybe you should <Link to="app">start over.</Link></p>
			</div>
		);
	}	
});

module.exports = NotFoundPage;
