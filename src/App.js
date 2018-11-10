import React, { Component } from 'react';
import Doors from './components/Doors';
import Shrine from './containers/Shrine';
import Background from './components/Background';

import './assets/css/App.css'
// import shrinetemp from './data.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      shrine: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Doors />
        <Shrine
          updateCoordinates={this.updateCoordinates}
          shrine={this.state.shrine}
        />
        <Background />
      </div>
    );
  }

  componentDidMount() {
    this.loadShrine()
  }

  //////////////////////////////////

  loadShrine = () => {
    fetch('http://localhost:3000/api/v1/shrines/3')
    .then(res => res.json())
    .then(shrine => {
      this.setState({
        shrine: shrine
      })
    })
  }

  updateCoordinates = (offeringId, posX, posY) => {
    console.log(offeringId);
    fetch(`http://localhost:3000/api/v1/offerings/${offeringId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        style: {
          top: posY,
          left: posX
        }
      })
    })
    .then(this._checkStatus)
    .then(console.log)
    //
    // .then(r => r.json())
    // .then(console.log)
    // .then(() => {
    //   console.log('patched');
    //   this.loadShrine()
    // })
  }
}

export default App;
