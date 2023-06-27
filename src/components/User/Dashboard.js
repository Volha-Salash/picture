import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserBytoken, clearState } from "./UserSlice";
import { Rings } from 'react-loader-spinner';


class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        isFetching: false,
        isError: false,
      };
    }
  
    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(fetchUserBytoken({
         token: localStorage.getItem("token") }));
    }
  
    componentDidUpdate(prevProps) {
      const { isError, history, dispatch } = this.props;
      if (prevProps.isError !== isError && isError) {
        dispatch(clearState());
        history.push("/login");
      }
    }
  
    onLogOut() {
      localStorage.removeItem("token");
      this.history.push("/login");
    }
  
    render() {
      const { isFetching, username, email } = this.props;
  
      return (
        <div className="container mx-auto">
          {isFetching ? (
            <Rings type="Puff" color="#00BFFF" height={100} width={100} />
          ) : (
            <Fragment>
              <h1>Welcome {username}!</h1>
              <p>Your email is {email}.</p>
              <button onClick={this.onLogOut}>Log out</button>
            </Fragment>
          )}
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    isFetching: state.user.isFetching,
    username: state.user.username,
    email: state.user.email,
    isError: state.user.isError,
  });
  
  export default connect(mapStateToProps)(Dashboard);