import React from 'react';
import Nav from '../components/Nav/Nav.js';
import Calendar from "../components/Calendar";
import "./Homepage.css";


class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
      		<Nav />
          	<Calendar />
      </div>
    );
  }
}

export default Homepage;