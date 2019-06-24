import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import "../style/ShoppingCart.css"

@inject("generalStore")
@observer
class ShoppingCart extends Component {

    constructor() {
        super()
        this.state = {
            message: { text: "Thank you for your purchase!",
            devNote : "--this would be updated to the order details with nice look soon" },
            isPurchaseComplete: false,
            inputEmail: ""
        }
    }

    toggleShipping = () => this.props.generalStore.includeShipping = !this.props.generalStore.includeShipping
    toggleCheckout = () => this.setState({ isPurchaseComplete: true })
    sendMail = () => {
        let mailObj = {
            message : this.state.message, 
            email : this.state.inputEmail
        }
        this.props.generalStore.sendMail(mailObj)
    }
    handleInput = e => this.setState({ inputEmail: e.target.value })

    render() {

        let generalStore = this.props.generalStore

        return (
            <div id="shoppingCart">
                {generalStore.cartItems.length ? <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">

                        {generalStore.cartItems.map(item =>
                            <li className="collection-item avatar" key={item._id}>
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
                                    <br></br>
                                    <br></br>
                                    <span style={{ fontSize: "15px" }}>Conformation Email To :</span>
                                    <input type="text" onChange={this.handleInput}
                                        placeholder="Conformation Mail To" />
                                </label>
                            </li>
                            <li className="collection-item"><b>Total: {generalStore.calcCartTotal} $</b></li>
                        </div>
                        <div className="checkout">
                            <button className="waves-effect waves-light btn" onClick={this.toggleCheckout}>Checkout</button>
                        </div>
                    </div>

                </div> : <li className="collection-item">Your Cart Is Empty</li>}
                {this.state.isPurchaseComplete ?
                    <button className="waves-effect waves-light btn" onClick={this.sendMail}>Send confirmation mail</button>
                    : null}
            </div>
        );
    }
}

export default ShoppingCart;