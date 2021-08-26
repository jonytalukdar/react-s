import React from 'react';
import withCounter from './HOC/withCounter';

class ClickCounter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click {count} Times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
