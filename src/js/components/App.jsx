var React = require("react");
var Actions = require("../actions/Actions.js");
var Store = require("../store/Store.js");
var api = require("../api/api.js");
var NotesForm = require("./NotesForm.jsx");
var NotesWall = require("./NotesWall.jsx");

function updateAppState(){
	return{
		notes: Store.getNote()
	};
}


var App = React.createClass({

	getInitialState: function(){
		return updateAppState();
	},
	componentWillMount(){
		api.getNotes();
	},
	componentDidMount: function(){
		Store.addChangeListener(this._onChange)
	},
	componentUnmount: function(){
		Store.removeChangeListener(this._onChange)
	},

	render: function(){
		return(
			<div className="container">
					<div className="row">
						<div className="col-md-2">
							<NotesForm />
						</div>
						<div className="col-md-10">
							<NotesWall notes={this.state.notes}/>
						</div>
					</div>
			</div>
		)
	},

	_onChange: function(){
		this.setState(updateAppState())

	},


})

module.exports = App;