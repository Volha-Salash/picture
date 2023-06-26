import React from 'react'; 
import { Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux';

class ProtectedRoute extends React.Component {
     render() {
         const { 
            isAuthenticated, 
            component: Component, 
            ...rest } = this.props;
return (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ 
            pathname: '/user/login', 
            state: { from: props.location } }} />
      )
    }
  />
);
} 
}

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps)(ProtectedRoute);