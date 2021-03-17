import React from 'react';
import CharComponent from './CharComponent/CharComponent';


class CharComponents extends React.Component {

    componentDidMount(){
        console.log('<CharComponents> se ha montado')
    }

    componentWillUnmount(){
        console.log('<CharComponents> se va a desmontar')
    }

    render() {
        let aux = this.props.lpalabra.split("");

        return (
            <>
            <div className="Centrar">
            {aux.map((letra, id) => {
                return <CharComponent 
                l={letra}
                key={id}
                eliminar={() => this.props.borrar(id)} />
            })} 
            </div>
           </>
        )
    }
}

export default CharComponents;