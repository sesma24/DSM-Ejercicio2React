import React from 'react';
import './ValidationComponent.css';

class ValidationComponent extends React.Component {

    render() {
        let longitud = this.props.palabra.length;
        let salida = "";
        let estilocuadro = "";

        if (longitud < this.props.limite) {
            salida = ("Texto demasiado corto");
            estilocuadro = "ResultadoNoOk";
        }else{
            salida = ("Texto suficientemente largo");
            estilocuadro = "ResultadoOk";
        }
   
        return (
            <div className={estilocuadro}>
                <p>{salida}</p>
            </div >
        )
    }
};

export default ValidationComponent;