import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, onClickItem } from 'react-responsive-carousel';

import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"


@inject("generalStore")
@observer

class ProductCarousel extends Component {

    constructor() {
        super()
        this.state = {
        showCartModal : false
      }
    }

    showModal = () => this.setState({showCartModal : !this.showCartModal})

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        const generalStore = this.props.generalStore

        return (
          
<Slider {...settings}>
 {generalStore.products.map(p => <div><img className="item" onClick={this.showModal} src={p.pic} /></div> )}
      </Slider>
        )
    }
}

export default ProductCarousel;