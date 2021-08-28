import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import { CountProvider } from './CountProvider';

const App = () => {
  return (
    <CountProvider>
      <div className="container">
        <div className="row  ">
          <div className="col-sm-6 offset-3">
            <h2 className="my-2 text-center">Redux and Context</h2>
            <Counter />
          </div>
        </div>
      </div>
    </CountProvider>
  );
};

export default App;
