import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import "../style/ShoppingCart.css"

@inject("generalStore")
@observer
class ShoppingCart extends Component {

    toggleShipping = () => this.props.generalStore.includeShipping = !this.props.generalStore.includeShipping

    render() {

        let generalStore = this.props.generalStore

        return (
            <div id="shoppingCart">
                {generalStore.cartItems.length ? <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">

                        {generalStore.cartItems.map(item =>
                            <li className="collection-item avatar" key={item.id}>
                                <div className="item-img">
                                    <img src={item.pic} alt={item.pic} className="" />
                                </div>

                                <div className="item-desc">
                                    <span className="title">{item.name}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: {item.price}$</b></p>
                                    <p>
                                        <b>Quantity: {item.quantity}</b>
                                    </p>
                                    <div className="add-remove">
                                        <Link to="/cart"><i className="material-icons" onClick={() => { generalStore.handleProductQuantity(item._id, "add") }}>arrow_drop_up</i></Link>
                                        <Link to="/cart"><i className="material-icons" onClick={() => { generalStore.handleProductQuantity(item._id, "subtract") }}>arrow_drop_down</i></Link>
                                    </div>
                                    <button className="waves-effect waves-light btn pink remove" onClick={() => { generalStore.handleProductQuantity(item._id, "remove") }}>Remove</button>
                                </div>

                            </li>)}

                    </ul>
                    <div className="shippingAndTotal">
                        <div className="collection">
                            <li className="collection-item">
                                <label>
                                    <input type="checkbox" ref="shipping" onChange={this.toggleShipping} />
                                    <span>Shipping(+6$)</span>
                                </label>
                            </li>
                            <li className="collection-item"><b>Total: {generalStore.calcCartTotal} $</b></li>
                        </div>
                        <div className="checkout">
                            <button className="waves-effect waves-light btn">Checkout</button>
                        </div>
                    </div>
                </div> : <h3>Nothing.</h3>


                }
            </div>
        );
    }
}

export default ShoppingCart;