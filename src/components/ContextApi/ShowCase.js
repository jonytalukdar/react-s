import React, { Component } from 'react';
import { UserConsumer, UserContext } from './UserContext';

class AddItem extends Component {
  state = {
    value: '',
  };

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const { value } = this.state;

    if (value) {
      this.context.addToShowCase(value);
      this.setState({
        value: '',
      });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.addItem}>
        <div className="form-inline justify-content-between">
          <input
            className="form-control span-2 d-inline  "
            type="text"
            value={value}
            onChange={this.onChangeHandler}
          />
          <button
            type="submit"
            className="btn  btn-lg btn-primary btn-block my-2"
          >
            Add Item
          </button>
        </div>
      </form>
    );
  }
}

AddItem.contextType = UserContext;

const ItemsList = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <ul className="list-group">
          {user.languages.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </UserConsumer>
  );
};

const ShowCase = ({ addToShowCase }) => {
  return (
    <UserConsumer>
      {({ user }) => (
        <div>
          <h4>{user.name} : ShowCase</h4>
          <AddItem addToShowCase={addToShowCase} />
          <ItemsList />
        </div>
      )}
    </UserConsumer>
  );
};

export default ShowCase;
