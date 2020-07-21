import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Signup} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;