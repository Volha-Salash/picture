import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from "./components/User/Login";
import Dashboard from "./components/User/Dashboard";
import Signup from "./components/User/Signup";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact component={Login} path="/login" />
            <Route exact component={Signup} path="/register" />
            <Route exact component={Dashboard} path="/dashboard" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;