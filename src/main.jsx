"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){  //onChange={this.props.onChange} />
	React.render(<Handler/>, document.getElementById('app'));
});
