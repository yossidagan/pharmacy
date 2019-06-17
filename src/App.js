import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';


@inject("generalStore")
@observer

class App extends Component {

  componentDidMount = async () => {
    await this.props.generalStore.getProductsFromDB()
    console.log(this.props.generalStore.products)
  }

  render () {

    return (
      
      <HomePage/>

    ) 

  }
}

export default App;
