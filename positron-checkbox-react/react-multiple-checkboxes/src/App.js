import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  // Chheckbox Initial State
  state = {
    isApple: false,
    isOrange: false,
    isBanana: false,
    isCherry: false,
    isAvocado: false
  }

  // React Checkboxes onChange Methods
  onChangeApple = () => {
    this.setState(initialState => ({
      isApple: !initialState.isApple
    }))
  }

  onChangeOrange = () => {
    this.setState(initialState => ({
      isOrange: !initialState.isOrange,
    }));
  }

  onChangeBanana = () => {
    this.setState(initialState => ({
      isBanana: !initialState.isBanana,
    }));
  }

  onChangeCherry = () => {
    this.setState(initialState => ({
      isCherry: !initialState.isCherry,
    }));
  }

  onChangeAvocado = () => {
    this.setState(initialState => ({
      isAvocado: !initialState.isAvocado,
    }));
  }

  

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;