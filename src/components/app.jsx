/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<div className="row">
						<div className="large-12 columns">
							<RouteHandler />
						</div>
					</div>
				</div>
			</div>
		);
		
	}
});

module.exports = App;