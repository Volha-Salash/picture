import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers';
import loginSlice from './components/User/loginSlice';


const store = configureStore({
  reducer: {
    images: imagesReducer,
    login: loginSlice,

  },
});

export default store;
