import React from 'react';
import './App.css';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import CharComponents from '../components/CharComponents/CharComponents';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      limit: 5
    }
  }

  changeLetter = (e) => {
    //console.log('Entra');
    this.setState ({
      text: e.target.value
    })
  }


  deleteLetter = (id) => {
    let letters = [...this.state.text];
    //console.log(letters);
    letters.splice(id,1);
    // //personas[id].nombre="borrado";
    this.setState({text: letters.join('')});

  }

  render() {


    return (
      <div className="App">
        <Header titulo="Ejercicio 2 React" />

        <Input
          palabra={this.state.text}
          cambiando={this.changeLetter}
        />

        <ValidationComponent
          palabra={this.state.text}
          limite={this.state.limit}
        />
        
        <CharComponents 
          lpalabra={this.state.text} 
          borrar={this.deleteLetter}
        />

      </div>
    )
  }

}

export default App;
