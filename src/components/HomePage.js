import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("generalStore")
@observer

class HomePage extends Component {

    render() {

        const generalStore = this.props.generalStore

        return (
            <div>
                {generalStore.products.map((p, i) => <div key={i}>{p.name}</div>)}
            </div>
        );
    }
}

export default HomePage;