// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Async Action Creator
export const loginUser = ({ email, password }) => {
  console.log('login user');
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      
      const response = await fetch('https://localhost:5290/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('response',response);
      if (response) {
        const data = await response.json();
        const { token } = data;

        console.log('TOKEN', token);
        localStorage.setItem('token', token);

        
        dispatch(loginSuccess(token));
      } else {
        const error = await response.text();
        dispatch(loginFailure(error));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};