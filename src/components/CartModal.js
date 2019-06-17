
import React, { Component } from "react";
import "../../css/popUp.css"
import axios from 'axios';
import "../style/cart-modal.css"



class CartModal extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      surName: "",
      country: ""
    }
  }

  changeValue = e => this.setState({ [e.target.id]: e.target.value })

  updatePoppedClient = async () => {

    const clientData = {

      id: this.state.id,
      name: `${this.state.name} ${this.state.surName}`,
      country: this.state.country

    }

    let response = await axios.put(`/updateClientPopUp/`, clientData)
    this.props.getDataFromDB()

  }

  componentDidMount = () => {

    let clientName = this.props.clientData.name.split(" ")

    this.setState({
      name: clientName[0],
      surName: clientName[1],
      country: this.props.clientData.country,
      id: this.props.clientData.id
    })
  }

  render() {

    return (
      
      <span id="popUp">

        <i onClick={this.props.togglePopUp} className="far fa-window-close"></i>
        <span className="inputField">Name : <input type="text" className="name" value={this.state.name} onChange={this.changeValue} /></span>
        <span className="inputField">SurName : <input type="text" className="surName" value={this.state.surName} onChange={this.changeValue} /></span>
        <span className="inputField">country : <input type="text" className="country" value={this.state.country} onChange={this.changeValue} /></span>
        <div onClick={this.updatePoppedClient} className="updateBtn">Update</div>


      </span>

    )
  }
}
export default CartModal;