import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers';
import { authReducer } from './userReducers';

const store = configureStore({
  reducer: {
    images: imagesReducer,
    auth: authReducer,
  },
});

export default store;
