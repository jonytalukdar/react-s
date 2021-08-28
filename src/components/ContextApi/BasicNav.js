import React from 'react';
import { UserConsumer } from './UserContext';

// LoggedInNav
const LoggedInNav = () => {
  return (
    <UserConsumer>
      {({ user, logout }) => (
        <div>
          <p>
            Welcome {user.name} your email is {user.email}
          </p>
          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </UserConsumer>
  );
};

// LoggedOutNav
const LoggedOutNav = () => {
  return (
    <UserConsumer>
      {({ login }) => (
        <div>
          <button className="btn btn-light">Register</button>
          <br />
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </div>
      )}
    </UserConsumer>
  );
};

// Basic Nav
const BasicNav = () => {
  return (
    <UserConsumer>
      {({ isAuthenticated }) => (
        <>{isAuthenticated ? <LoggedInNav /> : <LoggedOutNav />}</>
      )}
    </UserConsumer>
  );
};

export default BasicNav;
