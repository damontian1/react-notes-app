var Actions = require("../actions/Actions.js");
require("whatwg-fetch");

module.exports = {
	addNote: function(note){
		fetch('https://api.mongolab.com/api/1/databases/react-notes-app/collections/notes?apiKey=jKF48pJGWpb4nShP0ufGSmUyXySG1Cn7', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(note)
		})
	},
	getNotes: function(){
		fetch('https://api.mongolab.com/api/1/databases/react-notes-app/collections/notes?apiKey=jKF48pJGWpb4nShP0ufGSmUyXySG1Cn7').then(function(response){
			return response.json()
		}).then(function(json){
			Actions.receiveNotes(json)
		})
	},
	removeNote: function(id){
		console.log(id)
		fetch('https://api.mongolab.com/api/1/databases/react-notes-app/collections/notes/'+id+'?apiKey=jKF48pJGWpb4nShP0ufGSmUyXySG1Cn7', {
				  method: 'delete',
					headers: {
					  'Content-Type': 'application/json'
					},
					body: JSON.stringify(id)
				})
	}
}

// fetch("https://api.mlab.com/api/1/databases/react-notes-app/collections?apiKey=jKF48pJGWpb4nShP0ufGSmUyXySG1Cn7")

