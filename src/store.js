import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers';
import { userSlice } from "./components/User/UserSlice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
    user: userSlice.reducer,
  },
});

export default store;
