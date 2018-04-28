const mongoose = require('mongoose');


// Event Schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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

// Get Event
module.exports.getEvent = function(id, callback) {
    Event.findById(id, callback);
};

// Add Event
module.exports.addEvent = function(event, callback) {
    Event.create(event, callback);
};

// Update Event
module.exports.updateEvent = function(id, event, options, callback) {
    var query = { _id: id };
    var update = {
        name: event.name
    }
    Event.findOneAndUpdate(query, update, options, callback);
};