import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers';
import loginSlice from './components/User/loginSlice';
import authenticatedSlice from './components/User/authenticatedSlice';

const store = configureStore({
  reducer: {
    images: imagesReducer,
    login: loginSlice,
    authenticated: authenticatedSlice,
  },
});

export default store;
