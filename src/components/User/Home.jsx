import React from "react";
import { Redirect } from "react-router-dom";

import Button from "@mui/material/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToLogin: false,
      redirectToRegistration: false
    };
  }

  handleLoginClick = () => {
    this.setState({ redirectToLogin: true });
  };

  handleRegistrationClick = () => {
    this.setState({ redirectToRegistration: true });
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Redirect to="/login" />;
    }

    if (this.state.redirectToRegistration) {
      return <Redirect to="/register" />;
    }

    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <Button
          sx={{ width: "200px", marginRight: "20px" }}
          variant="outlined" onClick={this.handleLoginClick}>Go to Login
          </Button>
        <Button sx={{ width: "200px", marginRight: "20px" }}
          variant="outlined" onClick={this.handleRegistrationClick}>Go to Registration
          </Button>
      </div>
    );
  }
}

export default Home;
