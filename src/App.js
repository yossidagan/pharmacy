import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import M from "materialize-css";
import ShoppingCart from './components/ShoppingCart';
import Profile from './components/Profile';
import Login from './components/Login';

import './App.css';
@inject("generalStore")
@observer

class App extends Component {

  componentDidMount = async () => {

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems);
    })

    await this.props.generalStore.getProductsFromDB()
    await this.props.generalStore.getUsersFromDB()

    console.log(this.props.generalStore.products)
  }

  render() {

    return (
      <Router>
        <div id="app">

          <Navbar />
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/cart' render={() => <ShoppingCart />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/profile' render={() => <Profile />} />

        </div>
      </Router>

    )

  }
}

export default App;
