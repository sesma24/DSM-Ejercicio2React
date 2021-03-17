import React from 'react';
import './CharComponent.css'

class CharComponent extends React.Component {
    
    render() {   
        return (
            
            <div className="Forma" onClick={this.props.eliminar}>
                <p className="estiloLetras" style={{display: "inline-block", padding: "16px", textAlign: "center", margin: "16px",
                border: "1px solid black"}} >{this.props.l}</p>
            </div >
        )
    }
};

export default CharComponent;