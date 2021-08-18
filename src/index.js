import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Clock extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">
          <span>
            This is a Clock {new Date().toLocaleTimeString(this.props.locale)}
          </span>
          <img src="" alt="" />
        </h1>
      </div>
    );
  }
}

ReactDom.render(<Clock locale="bn-BD" />, document.getElementById('root'));
