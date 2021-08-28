import React from 'react';

function User({ name }) {
  return <h2>{name(true)}</h2>;
}

export default User;
