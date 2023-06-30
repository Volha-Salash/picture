import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  signupUser } from "./loginSlice";
import { Redirect } from 'react-router-dom';
import Button from "@mui/material/Button";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      isSignnup: false,
    };
  }

  componentDidMount() {
    const currentUserToken = localStorage.getItem('token');
    if (currentUserToken) {
      this.props.history.push('/dashboard');
    }
  }

    componentDidUpdate(prevProps, prevState) {
    if (prevState.isSignnup !== this.state.isSignnup && this.state.isSignnup) {
      this.props.history.push("/dashboard");
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

 
  handleSignup = () => {
    const { username, email, password } = this.state;
    this.setState({ isSignnup: true }); 
    this.props.signupUser({ username, email, password });
  }

  render() {
        const { isSignnup } = this.state;

    if (isSignnup) {
      return <Redirect to="/dashboard" />
    }
       return (
        <div style={{ display: "block" }}>
               <h2>Signup</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleSignup}>Signup</Button>
      </div>
      
    );
  }
}



const mapDispatchToProps = (dispatch) => bindActionCreators({ signupUser}, dispatch);

export default connect(null, mapDispatchToProps)(Signup);