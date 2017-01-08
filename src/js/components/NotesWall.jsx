var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");
var Note = require("./Note.jsx");


var NotesWall = React.createClass({

	render: function(){
		return(
			<div className="row">
				{this.props.notes.map(function(note,i){
					return(
						<Note note={note} key={i}/>
					)
				})}					
			</div>
		)
	},




})

module.exports = NotesWall;