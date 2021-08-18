import React from 'react';
import ReactDom from 'react-dom';

const index = 0;

setInterval(() => {
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span>this is span tag {new Date().toLocaleTimeString()} </span>
      <img src="" alt="" />
    </h1>
  );

  ReactDom.render(element, document.getElementById('root'));
}, 1000);
