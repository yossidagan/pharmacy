import React, { Component } from 'react';
import "../style/HomePage.css"
import Carousel from './Carousel';
import Products from './Products';
import { observer, inject } from 'mobx-react';


@inject("generalStore")
@observer
class HomePage extends Component {

    render() {
        let loggedUser = JSON.parse(sessionStorage.getItem('login'))
        let generalStore = this.props.generalStore
        console.log(loggedUser)

        return (
            <div id="homePage">
                {sessionStorage.login ?
                    <div className="welcome">Welcome Back,{loggedUser.firstName}!</div> : null}
                {/* <Carousel /> */}
                <Products />
            </div>
        );
    }
}

export default HomePage;