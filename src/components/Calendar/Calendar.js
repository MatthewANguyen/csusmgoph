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
                monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
            }
        };

        componentDidMount() {

            $('.calendar-component').fullCalendar({
                schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
                defaultView: "month",
                themeSystem: 'bootstrap4',
                dayClick: function(date, jsEvent, view) {
                    if (modal) {
                        modal.style.display = "block";
                    }
                    $(this).css('background-color', 'red');
                },
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listMonth'
                },
                eventLimit: true, // allow "more" link when too many events
            });


            // Get the modal
            var modal = document.getElementById('myModal');

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }

        };


	render() {

        const d = new Date()
	
    	return (
            <div>
			    <div className="calendar-component" />	

                <div id="myModal" className="modal">


                  <div className="modal-content">
                    <h3 className="modal-date">{this.state.monthName[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear()}</h3>
                    <h2>[Event Description]</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the WHO CARES.</p>
                  </div>
                </div>

            </div>
		)
	}
};

export default Calendar;


