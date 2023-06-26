import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import store from './store'; 
import Login from './Login'; 
import ProtectedRoute from './ProtectedRoute';

class App extends React.Component {
   componentDidMount() {
     const accessToken = localStorage.getItem('accessToken'); 
     const refreshToken = localStorage.getItem('refreshToken');

if (accessToken && refreshToken) {
  store.dispatch({ type: 'REFRESH_TOKENS' });
}
}

render() {
   return ( 

   ); 
  } }

export default App;
