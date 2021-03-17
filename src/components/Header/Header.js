import React from 'react';
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>{this.props.titulo}</h1>
                <p>Carlos Lumbreras</p>
            </div>
        )
    }
}

export default Header;