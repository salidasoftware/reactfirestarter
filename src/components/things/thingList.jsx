"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var toastr = require('toastr');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var FirebaseConfig = require('../../constants/firebaseConfig.js');

var ThingList = React.createClass({

	propTypes: {
		things: React.PropTypes.array.isRequired
		
	},
	
	deleteThing: function(key, event) {
		event.preventDefault();
		var ref = new Firebase(FirebaseConfig.root+"things/"+key);
		ref.remove();
		toastr.success('Thing Deleted');	
	},
	
	render: function() {
		
		var createThingRow = function(thing) {
			return (
				<tr key={thing['.key']}>
					<td>
						<Link to="editThing" params={{key: thing['.key']}}>{thing['.key']}</Link>
					</td>
					<td>
						{thing.name}
					</td>
					<td>
						<a href="#" onClick={this.deleteThing.bind(this, thing['.key'])}>Delete</a>
					</td>
				</tr>
			);
		};
	
		return (
			<div>
				
				<table className="table">
					<thead>
						<th>ID</th>
						<th>Name</th>
						<th></th>
					</thead>
					<tbody>
						{this.props.things.map(createThingRow, this)}
					</tbody>
				</table>
				
			</div>	
		);
	}
});

module.exports = ThingList;