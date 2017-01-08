var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");


var NotesForm = React.createClass({

	render: function(){
		return(
			<div className="col-md-12 well note-form-box">
				<h4>Add Note</h4>
				<form className="form-group" onSubmit={this.submitHandler}>
						<input type="text" className="form-control" ref="text" placeholder="Enter Note Text..."/>
						<br/>
						<br/>
						<button type="submit" className="btn btn-success pull-right">Add</button>
				</form>
				
			</div>
		)
	},

	submitHandler: function(e){
		e.preventDefault();
		var note = {
			text: this.refs.text.value
		};
		
		Actions.addNote(note);
		this.refs.text.value = "";

	}


})

module.exports = NotesForm;