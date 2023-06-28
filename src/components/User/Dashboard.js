import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ImageUploader from '../ImageUploader';
import ImageGrid from '../ImageGrid';
import { setAuthenticated } from './authenticatedSlice';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.loginUser({ token });
    }
  }

  render() {
    const { authenticated } = this.props;

    if (!authenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <ImageUploader />
        <ImageGrid />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.login.authenticated,
});

const mapDispatchToProps = { setAuthenticated};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
