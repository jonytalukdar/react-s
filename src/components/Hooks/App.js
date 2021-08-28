import React from 'react';
import MyHooks from './MyHooks';
import { UserProvider } from './UserContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <UserProvider>
      <div className="container">
        <div className="row  ">
          <div className="col-sm-6 offset-3">
            <h2 className="my-2">We are learning react Hooks</h2>
            <MyHooks />
          </div>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
