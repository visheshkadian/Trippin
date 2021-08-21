import React from 'react';
import ReactDOM from 'react-dom';
import indexRoutes from './routes/index.jsx';
import { createBrowserHistory } from "history";
import {  Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Melbourne from './components/Places/melbourne';
import Fulllayout from './layouts/fulllayout.jsx';
import Profile from './components/header/ProfilePage';
import BlogMain from './components/Blog/blogmain.js';
import Dana from './components/People/Dana';
import Ronit from './components/People/Ronit';


import './assets/scss/style.css';
import LoginPage from './components/Login/LoginPage.js';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  
    <Switch>

      <Route path="/melbourne"  component={Melbourne} />

      <Route path="/profile"  component={Profile} />

      <Route path="/blogmain"  component={BlogMain} />

      <Route path="/dana"  component={Dana} />

      <Route path="/ronit"  component={Ronit} />

      <Route path="/login"  component={LoginPage} />

      <Route path="/"  component={Fulllayout} />

      
      
    </Switch>

    
  
  </Router>
  ,document.getElementById('root')); 
