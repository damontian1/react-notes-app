var Dispatcher = require("../dispatcher/Dispatcher.js");

var Actions = {
	addNote: function(note){
		Dispatcher.handleViewAction({
			actionType: "ADD_NOTE",
			note: note
		});
	},
	receiveNotes: function(notes){
		Dispatcher.handleViewAction({
			actionType: "RECEIVE_NOTES",
			notes: notes
		});	
	},
	removeNote: function(id){
		Dispatcher.handleViewAction({
			actionType: "REMOVE_NOTE",
			id: id
		});	
	}
	

};

module.exports = Actions;