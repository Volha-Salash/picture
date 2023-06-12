import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import thunk from 'redux-thunk';
import ImageList from './components/ImageList';
import imageReducer from './reducers';

const store = createStore(imageReducer, applyMiddleware(thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ImageList />
</Provider>
);

