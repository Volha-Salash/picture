import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
      error: null,
      redirect: false
    };
}
  
    static getDerivedStateFromError(error) {
      return { error };
    }
  
    componentDidCatch(error, info) {
      console.error(error);
      console.error(info);
      
      if (error.message && error.message.status === 401) {
        this.setState({ redirect: true });
      }
    }
  
    componentDidUpdate() {
      if (this.state.redirect) {
        window.location.href = '/login';
      }
    }
  
    render() {
      const { error } = this.state;

      if(this.state.redirect){
        return <Redirect to="/login" />;
      }
  
      if (error) {
        return (
          <div>
            <p>Error!</p>
            <p>{error.message}</p>
          </div>
        );
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;