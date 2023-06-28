import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  loginUser } from "./loginSlice";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

 
  handleLogin = () => {
    const {username, password } = this.state;
    this.props.loginUser({ username, password });
  }



  render() {
       return (
        <div>
        <h2>Login</h2>
        <input 
          type="username"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleLogin}>Login</button>

      </div>
      
    );
  }
}



const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUser}, dispatch);

export default connect(null, mapDispatchToProps)(Login);







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
