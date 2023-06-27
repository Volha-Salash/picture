import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, clearState } from './UserSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: '',
    };

    this.OnSubmit = this.OnSubmit.bind(this);
  }

  OnSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.handleSubmit({ email, password });
  }

  handleSubmit = (data) => {
    this.props.loginUser(data);
  };

  componentDidMount() {
    this.props.clearState();
  }

  componentDidUpdate(prevProps) {
    const { isError, isSuccess, errorMessage } = this.props;
    if (prevProps.isError !== isError && isError) {
      toast.error(errorMessage);
      this.props.clearState();
    }
    if (prevProps.isSuccess !== isSuccess && isSuccess) {
      this.props.clearState();
      this.props.history.push('/');
    }
  }

  render() {
    const { register } = this.props;
    const { isFetching } = this.props;

    return (
      <Fragment>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form
                className="space-y-6"
                onSubmit={this.handleSubmit} 
                method="POST"
              >
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      ref={register({
                        pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                      })}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      ref={register({ required: true })}
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isFetching ? (
                      <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    Sign in
                  </button>
                </div>
              </form>
              <div class="mt-6">
                <div class="relative">
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">
                      Or <Link to="signup"> Signup</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

}



const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    isSuccess: state.isSuccess,
    isError: state.isError,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
    clearState: () => dispatch(clearState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);







/*
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = event => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(data => {
      localStorage.setItem('token', data.token);
      this.props.history.push('/dashboard');
    })
    .catch(error => {
      this.setState({ error: error.message });
    });
  };

  render() {
    const { username, password, error } = this.state;
    return (
      <form onSubmit={this.handleLogin}>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleInputChange} required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          < type="password" name="password" value={password} onChange={this.handleInputChange} required/>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default Login;
 */
