import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { error } = this.props.auth;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>username:</label>
            <input
              type="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        {error && <div>{error}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { login })(Login);







/*
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = event => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(data => {
      localStorage.setItem('token', data.token);
      this.props.history.push('/dashboard');
    })
    .catch(error => {
      this.setState({ error: error.message });
    });
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <form onSubmit={this.handleLogin}>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          < type="password" name="password" value={password} onChange={this.handleInputChange} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
 */
