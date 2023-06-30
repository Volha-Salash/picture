import React from 'react';
import { Redirect } from 'react-router-dom';
import ImageUploader from '../ImageUploader';
import ImageGrid from '../ImageGrid';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    const currentUserToken = localStorage.getItem('token');

    if (currentUserToken) {
      this.setState({ currentUser: { token: currentUserToken }, isLoading: false });
    } else {
      this.setState({ isLoading: false }); 
    }
  }

  render() {
    const { currentUser, isLoading } = this.state;
   // console.log('currentUser', currentUser);

    if (isLoading) {
      return <p>Loading...</p>; 
    }

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <h1>Pictures</h1>
        {currentUser ? (
          <div>
            <ImageUploader/>
            <ImageGrid/>
          </div>
        ) : (
          <p>No user information available</p>
        )}
      </div>
    );
  }
}

export default Dashboard;

