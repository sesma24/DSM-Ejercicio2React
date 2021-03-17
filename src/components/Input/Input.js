import React from 'react';

class Input extends React.Component {
    render() {
        return (
            <div>
                <p>Introducir texto:</p>
                <input type="text" onChange={this.props.cambiando} value={this.props.palabra}/>
                <p>El texto introducido tiene: {this.props.palabra.length} caracteres</p>
            </div >
        )
    }
};

export default Input;