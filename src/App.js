import React, { Component } from 'react';
import Clock from './components/State/Clock';

class App extends Component {
  render() {
    return (
      <div>
        <Clock locale="bn-BD" />
      </div>
    );
  }
}

export default App;
