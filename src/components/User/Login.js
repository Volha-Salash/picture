import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from './loginSlice';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const currentUserToken = localStorage.getItem('token');
    if (currentUserToken) {
      this.props.history.push('/');
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    this.setState({ isLoggedIn: true }); 
    this.props.loginUser({ username, password });
  }

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h2>Login</h2>
        <input
          type="username"
          name="username"
          placeholder="Username"
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ loginUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

/*
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

*/


