import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel, onClickItem } from 'react-responsive-carousel';

@inject("generalStore")
@observer

class ProductCarousel extends Component {

    constructor() {
        super()
        this.state = {
            showCartModal: false
        }
    }

    showModal = () => {
        // event.preventDefault()
        console.log("Ok2")
        // onClick={this.showModal()}
    }

    render() {

        const generalStore = this.props.generalStore

        return (
                <div className="carousel">

                    {generalStore.products.map(p =>
                        <a className="carousel-item" onClick={this.showModal}><img src={p.pic} /></a>
                    )}
                </div>

                

        )
    }
}

export default ProductCarousel;