import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "../style/navbar.css"


class Navbar extends Component {
    render() {
        return (

            <div id="navBar">

            <Link to="/">HOME</Link>
            <Link to="/actions">CATEGORIES</Link>
            <Link to="/analytics">CART</Link>

        </div>

        );
    }
}

export default Navbar;