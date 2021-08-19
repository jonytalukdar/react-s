import React, { Component } from 'react';
import Clock from './components/Events/Clock';

class App extends Component {
  render() {
    console.log('app comonent render');
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default App;
