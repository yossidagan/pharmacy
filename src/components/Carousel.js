import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { observer, inject } from 'mobx-react';
// import data from "../data.json"

@inject("generalStore")
@observer

class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);
  }

  showModal = () => console.log("Ok")
  
  renderThis = () => {

    // const data = this.props.generalStore.products

    let data = [
      {
        name: "hamburger",
        pic: "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620%2Ch_413/the-ultimate-hamburger.jpg"
    }, {
      name: "deserts",
      pic: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_760/https://storage.googleapis.com/gen-atmedia/3/2018/12/8cfbcbb2919742682345681d469b7417a73e4dfe.jpeg"
  }
    ]

    return data.map(i => (
      <a key={i.name} className="carousel-item">
        <img onClick={this.showModal} src={i.pic} /> 
      </a>
    ));
  };
  render() {
    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
        {this.renderThis()}
      </div>
    );
  }
}

export default Carousel;