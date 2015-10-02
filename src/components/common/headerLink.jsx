"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var HeaderLink = React.createClass({
	
	mixins: [Router.State],
	
	propTypes: {
		to: React.PropTypes.string.isRequired
	},
	
	render: function(){
	
		var _this = this;
		var currentRoutes = this.context.router.getCurrentRoutes();
		var active = "";
		_.each(currentRoutes, function(route) {
			//Skip over app/undefined or home will always be active
			if((typeof route.name == "undefined") || (route.name == "app")) {
				return;
			}
			if(route.name == _this.props.to) {
				active = 'active';
			}
		});
		
		return (
			<li className={active}><Link to={this.props.to}>{this.props.children}</Link></li>		
		);
	}
});

module.exports = HeaderLink;