import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from './loginSlice';
import { Redirect } from 'react-router-dom';
import Button from "@mui/material/Button";

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
      this.props.history.push('/dashboard');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoggedIn !== this.state.isLoggedIn && this.state.isLoggedIn) {
      this.props.history.push("/dashboard");
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
    if (this.state.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }


    return (
      <div className="image-cell">
        <div style={{ display: "block", flexDirection: "column" }}>
        <h2>Login</h2>
        <input style={{ display: "block", flexDirection: "column" }}
          type="username"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input style={{ display: "block", flexDirection: "column" }}
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Button variant="outlined" style={{ display: "block", flexDirection: "column" }} 
        onClick={this.handleLogin}>Login</Button>
      </div>
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


