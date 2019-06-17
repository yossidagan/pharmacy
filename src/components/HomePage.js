import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Carousel from './Carousel';

@inject("generalStore")
@observer

class HomePage extends Component {

    render() {


        return (
            <div>
                <Carousel/>
            </div>
        );
    }
}

export default HomePage;