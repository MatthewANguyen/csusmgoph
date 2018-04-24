import React from 'react';
import './Calendar.css';
import './Scheduler.css';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';

class Calendar extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
            }
        };

        componentDidMount() {
        		const calendar = $('.calendar-component').fullCalendar({
        			schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        			defaultView: "month",
        			dayClick: function(date, jsEvent, view) {
        				alert('clicked: ' + date.format());
        				alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY)
        				alert('Current view: ' + view.name);
        				$(this).css('background-color', 'red');

        			}
        	});

        };

	render() {

		return (
			<div className="calendar-component" />	
		)
	}
};

export default Calendar;


