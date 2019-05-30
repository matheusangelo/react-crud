import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "titulo": "Pineapple"
        }
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-primary topo">
                    <span className="navbar-brand mb-0 h1">{this.state.titulo}</span>
                </nav>
            </>
        )
    }
}
export default Header;