import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "titulo": "titulo"
        }
    }

    render() {
        return (
            <>
                {this.state.titulo}
            </>
        )
    }
}
export default Header;