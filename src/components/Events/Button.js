import React, { Component } from 'react';

class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProps;

    if (currentChange === nextChange) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log('button component render');
    const { handleClick } = this.props;
    return (
      <div>
        <button onClick={() => handleClick()}>Click here</button>
      </div>
    );
  }
}

export default Button;
