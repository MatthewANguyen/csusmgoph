import React, { Component } from 'react';
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Router>
      		<div>
      		  <Route exact path="/" component={Homepage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
