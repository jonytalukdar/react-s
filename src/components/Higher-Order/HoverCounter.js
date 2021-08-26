import React from 'react';
import withCounter from './HOC/withCounter';

const HoverCounter = ({ count, increament }) => {
  return (
    <div>
      <button onMouseMove={increament}>Click {count} Times</button>
    </div>
  );
};

export default withCounter(HoverCounter);
