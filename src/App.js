import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          I was changed in the feature branch. ----- hi there, this is a new voluem mapped. blahahaaaa; welcome to the galaxy.
        </p>
      </div>
    );
  }
}

export default App;
