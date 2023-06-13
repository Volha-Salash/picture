import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import ImageUploader from './components/ImageUploader';
import ImageGrid from './components/ImageGrid';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
   <ImageUploader />
      <ImageGrid />
</Provider>
);
