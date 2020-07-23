import React, { useEffect } from 'react';
import 'antd/dist/antd.css'; 
import './App.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import HomeFunction from './containers/Home/HomeFunction';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import {getInfo} from './redux/actions/users'
import Cart from './containers/Cart/Cart';
function App() {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if(token){
      getInfo()
      .catch(()=>localStorage.removeItem('authToken'));
    }
  }, [])//lo mismo que componentDidMount, al tener la array vacía []
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={HomeFunction} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/signup' component={Signup} exact />
        <Route path='/cart' component={Cart} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;