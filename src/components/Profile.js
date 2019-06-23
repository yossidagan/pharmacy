import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom'
import "../style/Profile.css"


class Profile extends Component {
    render() {

        let generalStore = this.props.generalStore
        return (


            <div>
                <ul class="collection with-header">
                    <li class="collection-header"><h4>Name</h4></li>
                    <li class="collection-item">Email</li>
                    <li class="collection-item">Favourite Prducts</li>
                    <li class="collection-item">Alvin</li>
                </ul>
            </div>

        );
    }
}

export default Profile;