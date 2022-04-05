import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import RegisterPage from './pages/register/register';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import {auth} from './firebase/firebase.utils.js';


class App extends Component() {
  constructor() {
    super();
    this.state = {
      currentUser: null      
    }

    unsubscribeFromAuth = null;    

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      });
    }

    componentWillUnMount() {
      this.unsubscribeFromAuth();
    }
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path= '/' component={HomePage}/>
          <Route exact path= '/shop' component={ShopPage}/>
          <Route exact path= '/signin' component={RegisterPage}/>
        </Switch> 
      </div>
    )
  }  
};

export default App;
