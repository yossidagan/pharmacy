import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

@inject("generalStore")
@observer

class ProductCarousel extends Component {
    render() {
        return (
        <div id="carousel"><Carousel>
        {this.props.generalStore.products.map(p => <img src={p.pic} />
)}
    </Carousel></div>
        )
    }
}

export default ProductCarousel;