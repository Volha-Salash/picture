import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store';
import ErrorBoundary from './helpers/ErrorBoundary.js';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>       
          <ErrorBoundary>
            <App />
            </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
