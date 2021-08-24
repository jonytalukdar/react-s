import React from 'react';

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <h3 style={{ color: 'blue' }}>The water would boil</h3>;
  } else {
    return <h3 style={{ color: 'red' }}>The water would not boil</h3>;
  }
};

export default BoilingVerdict;
