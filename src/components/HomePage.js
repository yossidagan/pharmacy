import React, { Component } from 'react';
import "../style/HomePage.css"
import Carousel from './Carousel';
import Products from './Products';

class HomePage extends Component {

    render() {


        return (
            <div id="homePage">
                {/* <Carousel /> */}
                <Products />
            </div>
        );
    }
}

export default HomePage;