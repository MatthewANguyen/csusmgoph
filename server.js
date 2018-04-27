const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3030 || process.env.PORT();


// Initialize Mongoose
let Event = require('./src/models/event');

mongoose.connect('mongodb://localhost/csusmgophDatabase');
const db = mongoose.connection

// Landing page route
app.get('/', function(req, res) {
	res.send('WELCOME TO LANDING PAGE. USE /api/events FOR EVENTS');
})

// api for events
app.get('/api/events', function(req, res) {
	Event.getEvents(function(err, events) {
		if(err){ 
			throw err;
		}
		console.log("/api/events")		
		res.json(events);
	});
});

app.post('/api/events', function(req, res) {
	var genre = req.body;
	Event.addEvent(event, function(err, event) {
		if(err){ 
			throw err;
		}
		console.log("/api/event")		
		res.json(event);
	});
});



// Listening for changes on this PORT
app.listen(PORT, function(){
	console.log("Listening on PORT: " + PORT);
});