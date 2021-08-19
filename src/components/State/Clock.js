import React, { Component } from 'react';

class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 style={{ textAlign: 'center' }}>
        {this.state.date.toLocaleTimeString(this.props.locale)}
      </h1>
    );
  }
}

export default Clock;
