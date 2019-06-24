import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { observer, inject } from 'mobx-react';
// import data from "../data.json"
import "../style/Carousel.css"

@inject("generalStore")
@observer

class Carousel extends Component {

  constructor() {
    super()
    this.state = {
      showModal: false,
      topProducts: []
    }
  }

  getTopProducts = () => {
    let generalStore = this.props.generalStore
    let topProducts1 = generalStore.products.filter(p => p.isTopProduct)
    console.log(topProducts1)
    this.setState({ topProducts: topProducts1 })
  }
  async componentDidMount() {

    await this.getTopProducts()

    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log("New Slide");
      }
    };
    M.Carousel.init(this.Carousel, options);
  }

  showModal = () => this.setState({ showModal: !this.state.showModal })

  renderThis = () => {

    // const data = this.props.generalStore.products

    let data = [{
      name: "KK",
      pic: "ss"
    }]

    return data.map(i => (
      <a key={i.name} className="carousel-item">
        <img onClick={this.showModal} src={i.pic} />
      </a>
    ));
  };
  render() {
    return (
      <div id="carousel">
        <div id="headline">Most Popular Right Now</div>
        <div
          ref={Carousel => {
            this.Carousel = Carousel;
          }}
          className="carousel"
        >
          {this.state.topProducts.map(p => {
            return( <a key={p.name} className="carousel-item">
              <img onClick={this.showModal} src={p.pic} />
            </a>)
          }

          )}
        </div>

      </div>

    )
  }
}

export default Carousel;