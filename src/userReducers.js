

const initialState = {
    isAuthenticated: false,
    user: null,
    accessToken: JSON.parse(localStorage.getItem("accessToken")),
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                error: null,
            };

        case "LOGIN_FAILURE":
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                accessToken: null,
                error: action.payload,
            };

        case "TOKEN_EXPIRED":
            return {
                ...state,
                accessToken: null,
            };

        case "TOKEN_REFRESHED":
            return {
                ...state,
                accessToken: action.payload,
            };

        case "LOGOUT":
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                accessToken: null,
            };
            default: return state;
    }
}



/*
const initialState = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    user: null,
    error: null
};

const loginPending = (state) => {
    state.error = null;
};

const loginSuccess = (state, action) => {
    state.isAuthenticated = true;
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
    state.user = action.payload.user;
    state.error = null;
};

const loginFailure = (state, action) => {
    state.isAuthenticated = false;
    state.accessToken = null;
    state.refreshToken = null;
    state.user = null;
    state.error = action.payload;
};

const refreshTokensSuccess = (state, action) => {
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
};

const refreshTokensFailure = (state, action) => {
    state.isAuthenticated = false;
    state.accessToken = null;
    state.refreshToken = null;
    state.user = null;
    state.error = action.payload;
};

const logout = () => {
    return initialState;
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('LOGIN_PENDING', loginPending)
        .addCase('LOGIN_SUCCESS', loginSuccess)
        .addCase('LOGIN_FAILURE', loginFailure)
        .addCase('REFRESH_TOKENS_SUCCESS', refreshTokensSuccess)
        .addCase('REFRESH_TOKENS_FAILURE', refreshTokensFailure)
        .addCase('LOGOUT', logout);
});

export default authReducer;


/*
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {login, refreshTokens, logout} from './actions';


const initialState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        user: action.payload.user,
        error: null
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user: null,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
        user: null,
        error: null
      };
    default:
      return state;
  }
};

export const store = createStore(authReducer, applyMiddleware(thunk));
*/
