import React, { Component } from 'react';
import { UserProvider, UserConsumer } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNav from './BasicNav';
import ShowCase from './ShowCase';

class ContextApi extends Component {
  render() {
    return (
      <UserProvider>
        <div className="container">
          <div className="row  ">
            <UserConsumer>
              {({ isAuthenticated }) => (
                <div className="col-sm-6 offset-3">
                  <h2 className="my-2">Context-Api</h2>
                  <BasicNav />
                  {isAuthenticated && (
                    <ShowCase addToShowCase={this.addToShowCase} />
                  )}
                </div>
              )}
            </UserConsumer>
          </div>
        </div>
      </UserProvider>
    );
  }
}

export default ContextApi;
