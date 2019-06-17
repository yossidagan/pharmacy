import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductCarousel from './ProductCarousel';

@inject("generalStore")
@observer

class HomePage extends Component {

    render() {


        return (
            <div>
                <ProductCarousel/>
            </div>
        );
    }
}

export default HomePage;