import { Component, createContext } from 'react';

let Context = null;

const { Provider, Consumer } = (Context = createContext());

class UserProvider extends Component {
  state = {
    user: {
      name: 'joney talukdar',
      email: 'jony30@gmail.com',
      languages: ['JavaScript', 'React', 'Python', 'Java', 'Goland'],
    },
    isAuthenticated: true,
  };

  login = () => {
    this.setState({
      isAuthenticated: true,
    });
  };

  logout = () => {
    this.setState({
      isAuthenticated: false,
    });
  };

  addToShowCase = (item) => {
    const user = { ...this.state.user };
    user.languages.push(item);
    this.setState({ user });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
          addToShowCase: this.addToShowCase,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer, Context as UserContext };
