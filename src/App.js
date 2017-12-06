import React, { Component } from 'react';
import 'reset-css';
import './App.css';

import Portfolio from './portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carl A. Pillot</h1>
          <h2>Full-Stack Developer</h2>
        </header>
        <Portfolio />
      </div>
    );
  }
}

export default App;
