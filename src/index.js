import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store';
import ImageUploader from './components/ImageUploader';
import ImageGrid from './components/ImageGrid';
import './index.css';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ImageUploader />
      <ImageGrid />
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
