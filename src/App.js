import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Dashboard from "./components/User/Dashboard";
import { PrivateRoute } from "./helpers/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact component={Login} path="/login" />
            <Route exact component={Signup} path="/signup" />
            <PrivateRoute exact component={Dashboard} path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;