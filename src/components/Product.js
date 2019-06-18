import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import "../style/Product.css"



@inject("generalStore")
@observer

class Product extends Component {


    render() {
        let p = this.props.product
        console.log(p)
        return (
            <div id="product">
                <div className="card" >
                    <div className="card-image">
                        <img src={p.pic} />
                        <span className="card-title">{p.name}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{p.desc}</p>
                        <p><b>Price: {p.price}$</b></p>
                    </div>
                </div>            </div>
        );
    }
}

export default Product;