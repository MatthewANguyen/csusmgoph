import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import Calendar from "./components/Calendar";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      		<Nav />
          	<Calendar />
      </div>
    );
  }
}

export default App;
