import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import HomePage from './components/HomePage';
import './App.css';


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
