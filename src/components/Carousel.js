import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"


@inject("generalStore")
@observer


class Carousel extends Component {
     render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.props.generalStore.products.map(p => <div><img src={p.pic} alt=""/></div>)}
      </Slider>
      
    );
  }

}

export default Carousel;