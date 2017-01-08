var Dispatcher = require("../dispatcher/Dispatcher.js");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var api = require("../api/api.js");

var _notes = [];

var Store = assign({},EventEmitter.prototype, {
	
	addNote: function(note){
		_notes.push(note)
	},
	getNote: function(){
		return _notes;
	},
	setNotes: function(notes){
		_notes = notes
	},
	removeNote: function(id){
		var index = _notes.findIndex(function(element){
			return element._id.$oid == id
		})
		_notes.splice(index, 1)
	},
	emitChange: function(callback){
		this.emit("change");
	},
	addChangeListener: function(callback){
		this.on("change", callback);
	},
	removeChangeListener: function(callback){
		this.removeListener("change", callback);
	}

});

Dispatcher.register(function(data){
	var action = data.action

	switch(action.actionType){
		case "ADD_NOTE":
		// save in store
		Store.addNote(action.note);
		// save to api
		api.addNote(action.note);
		// emit change
		Store.emitChange();
		break;

		case "RECEIVE_NOTES":
		// save in store
		Store.setNotes(action.notes);
		// emit change
		Store.emitChange();
		break;

		case "REMOVE_NOTE":
		// remove note from store
		Store.removeNote(action.id);
		// // remove note from api
		api.removeNote(action.id);
		// emit change
		Store.emitChange();
		break;

	}
	return true;
});

module.exports = Store;