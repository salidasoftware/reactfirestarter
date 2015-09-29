"use strict";

var React = require("react");

var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		
		<DefaultRoute handler={require('./components/homePage')} />
		
		<Route name="things" handler={require('./components/things/thingsPage')} />
		<Route name="addThing" path="thing" handler={require('./components/things/editThingPage')} />
		<Route name="editThing" path="thing/:key" handler={require('./components/things/editThingPage')} />
		
		<Route name="login" path="login" handler={require('./components/users/loginPage')} />
		<Route name="logout" path="logout" handler={require('./components/users/logoutPage')} />
		<Route name="register" path="register" handler={require('./components/users/registerPage')} />
		
		<NotFoundRoute handler={require('./components/404')} />
	</Route>
);

module.exports = routes;
