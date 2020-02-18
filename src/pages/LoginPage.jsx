import React from 'react';
import Field from './../components/Field.jsx';

import './LoginPage.css';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render = () => {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <h1>{this.props.index}</h1>
        <Field
          value={this.state.email}
          onChange={this.handleEmail}
          title="Login"
        />
        <Field
          value={this.state.password}
          onChange={this.handlePassword}
          title="Password"
        />
        <button>Sign in</button>
      </form>
    );
  };
}

export default LoginPage;
