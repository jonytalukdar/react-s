import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {
  state = {
    date: new Date(),
    locale: 'en-US',
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

  //   handleclick function
  handleClick = () => {
    this.setState({
      locale: 'bn-BD',
    });
  };

  render() {
    console.log('clock component render');
    const { date, locale } = this.state;
    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <Button handleClick={() => this.handleClick()} />
      </>
    );
  }
}

export default Clock;
