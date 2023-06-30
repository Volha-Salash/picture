import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './reducers';
import loginSlice from './components/User/loginSlice';
//import { authInterceptor } from './actions';




const store = configureStore({
  reducer: {
    images: imagesReducer,
    login: loginSlice,
  },
 // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authInterceptor),
});

export default store;
