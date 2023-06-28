import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  signupUser } from "./loginSlice";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

 
  handleSignup = () => {
    const { name, email, password } = this.state;
    this.props.signupUser({ name, email, password });
  }

  render() {
       return (
        <div style={{ display: "block" }}>
               <h2>Signup</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
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
        <button onClick={this.handleSignup}>Signup</button>
      </div>
      
    );
  }
}



const mapDispatchToProps = (dispatch) => bindActionCreators({ signupUser}, dispatch);

export default connect(null, mapDispatchToProps)(Signup);