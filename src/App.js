import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomePage from './components/HomePage';
import './App.css';
import Navbar from './components/Navbar';
import M from "materialize-css";
import ShoppingCart from './components/ShoppingCart';

@inject("generalStore")
@observer

class App extends Component {

  componentDidMount = async () => {

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems);
    })

    await this.props.generalStore.getProductsFromDB()
    console.log(this.props.generalStore.products)
  }

  render() {

    return (
      <Router>
      <div id="app">

        <Navbar />
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/cart' render={() => <ShoppingCart />} />


      </div>
      </Router>

    )

  }
}

export default App;
