import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("generalStore")
@observer
class ShoppingCart extends Component {
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
                                 <img src={item.pic} alt={item.pic} className=""/>
                             </div>
                         
                             <div className="item-desc">
                                 <span className="title">{item.name}</span>
                                 <p>{item.desc}</p>
                                 <p><b>Price: {item.price}$</b></p> 
                                 {/* <p>
                                     <b>Quantity: {item.quantity}</b> 
                                 </p> */}
                                 <div className="add-remove">
                                     {/* <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                     <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link> */}
                                 </div>
                                 {/* <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button> */}
                             </div>
                             
                         </li>)}

                    </ul>
                </div> : null

                }
            </div>
        );
    }
}

export default ShoppingCart;