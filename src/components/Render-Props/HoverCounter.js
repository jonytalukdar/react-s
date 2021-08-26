import React from 'react';

class HoverCounter extends React.Component {
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
        <button onMouseMove={this.handleClick}>Click {count} Times</button>
      </div>
    );
  }
}

export default HoverCounter;
