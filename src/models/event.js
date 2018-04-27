const mongoose = require('mongoose');


// Event Schema
var eventSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		require: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Event = module.exports = mongoose.model('Event', eventSchema);

// Get Events
module.exports.getEvents = function(callback, limit) {
	Event.find(callback).limit(limit);
};

module.exports.addEvent = function(callback, limit) {
	Event.find(callback).;
};