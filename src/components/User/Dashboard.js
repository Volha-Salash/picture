import React from 'react';
import { Redirect } from 'react-router-dom';



class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem('token'));

    if (currentUser) {
      this.setState({ currentUser });
    }
  }

  render() {
    const { currentUser } = this.state;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }


    return (
      <div>
        <h1> Dashboard </h1>
        {currentUser ? (
          <div>
            <p>current UserToken: {currentUser.token}</p>
          </div>
        ) : (
          <p>No user information available</p>
        )}
      </div>
    );
  }
}

export default Dashboard;

