import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import "../style/Product.css"



@inject("generalStore")
@observer

class Product extends Component {

    addToCart = () => {
        let product = this.props.product
        let generalStore = this.props.generalStore

        generalStore.addToCart(product._id)
    }

    render() {
        let product = this.props.product
        
        return (
            <div id="product">
                <div className="card" >
                    <div className="card-image">
                        <img src={product.pic} />
                        <span className="card-title">{product.name}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                            onClick={this.addToCart}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{product.desc}</p>
                        <p><b>Price: {product.price}$</b></p>
                    </div>
                </div>            </div>
        );
    }
}

export default Product;