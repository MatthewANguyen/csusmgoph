const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3000 || process.env.PORT();

// Initialize bodyParser
app.use(bodyParser.json());

// Initialize Mongoose
let Event = require('./src/models/event');

mongoose.connect('mongodb://localhost/csusmgophDatabase');
const db = mongoose.connection

// Landing page route
app.get('/', function(req, res) {
    res.send('WELCOME TO LANDING PAGE. USE /api/events FOR EVENTS');
})

// api for events

// Find all Events

app.get('/api/events', function(req, res) {
    Event.getEvents(function(err, events) {
        if (err) {
            console.log("err", err)
            throw err;
        }
        console.log("/api/events")
        res.json(events);
    });
});

//  Get One Event

app.get('/api/events/:_id', function(req, res) {
    Event.getEvent(req.params._id, function(err, event) {
        if (err) {
            console.log("err", err)
            throw err;
        }
        console.log("/api/events/:_id")
        res.json(event);
    });
});

// Post New Event

app.post('/api/events', function(req, res) {
    var event = req.body;
    console.log('event initialize post req', event);
    Event.addEvent(event, function(err, event) {
        if (err) {
            console.log("err", err)
        	console.log('event ERROR', event);
            throw err;
        }
        console.log('event return event json', event);
        res.json(event);
    });
});

// Update Event

app.put('/api/events/:id', function(req, res) {
	var id = req.params.id;
	var event = req.body;
	console.log("req, params,id", req.params);
	Event.updateEvent(id, event, {}, function(err, event) {
		if(err) {
			throw err;
		}
		res.json(event);
	});
});


// Listening for changes on this PORT
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});