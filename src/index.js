import React from 'react';
import ReactDom from 'react-dom';

const element = React.createElement('h1', null, 'hello world');

const App = () => {
  return <h2>This is app component</h2>;
};

ReactDom.render(element, document.getElementById('root'));
