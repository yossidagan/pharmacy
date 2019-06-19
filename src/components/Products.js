import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Product from './Product';

import "../style/Products.css"

@inject("generalStore")
@observer

class Products extends Component {
    render() {
        
        let generalStore = this.props.generalStore

        return (
            <div>
                <div id="headline">Our Products</div>
                <div id="products">

                    {generalStore.products.map((p, i) => <Product key={i} product={p} />)}
                </div>
            </div>
        );
    }
}

export default Products;