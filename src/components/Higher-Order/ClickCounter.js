import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = ({ count, increament }) => {
  return (
    <div>
      <button onClick={increament}>Click {count} Times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
