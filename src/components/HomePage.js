import React, { Component } from 'react';
import "../style/HomePage.css"
import Carousel from './Carousel';

class HomePage extends Component {

    render() {


        return (
            <div id="homePage">
                <Carousel />
            </div>
        );
    }
}

export default HomePage;