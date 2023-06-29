import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from "./components/User/Login";
import Dashboard from "./components/User/Dashboard";
import Signup from "./components/User/Signup";



function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }

export default App;