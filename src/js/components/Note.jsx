var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");


var Note = React.createClass({

	render: function(){
		return(
			<div className="col-md-3">
				<div className="well stickyOut" onDoubleClick={this.handleDoubleClick}>
					<div className="stickyIn" >
						<p>
						{this.props.note.text}
						</p>
					</div>
				</div>
			</div>
		)
	},
	handleDoubleClick: function(){
		Actions.removeNote(this.props.note._id.$oid)
	}




})

module.exports = Note;