import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers';

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
