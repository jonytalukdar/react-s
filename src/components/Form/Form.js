import React, { Component } from 'react';

class Form extends Component {
  state = {
    inputValue: '',
    inputEmail: '',
    messageValue: '',
    selectedValue: '',
    isGoing: false,
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue, inputEmail, messageValue, selectedValue, isGoing } =
      this.state;
    const data = {
      name: inputValue,
      email: inputEmail,
      message: messageValue,
      select: selectedValue,
      isGoing: isGoing,
    };
    this.setState({
      inputValue: '',
      inputEmail: '',
      messageValue: '',
      selectedValue: '',
      isGoing: false,
    });
    console.log(data);
  };

  render() {
    const { inputValue, inputEmail, messageValue, selectedValue, isGoing } =
      this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="enter name"
            name="inputValue"
            value={inputValue}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="email"
            name="inputEmail"
            value={inputEmail}
            placeholder="enter email"
            onChange={this.handleChange}
          />
          <textarea
            placeholder="enter message"
            name="messageValue"
            value={messageValue}
            onChange={this.handleChange}
          />
          <select
            name="selectedValue"
            value={selectedValue}
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={isGoing}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {isGoing ? <h1>True</h1> : <h1>False</h1>}
      </div>
    );
  }
}

export default Form;
