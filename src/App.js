import React, { Component } from 'react';
import Doors from './components/Doors';
import Shrine from './containers/Shrine';
import Floor from './components/Floor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Editbar from './components/Editbar';

import './assets/css/App.css'

const apiURL = 'http://localhost:3000'
let shrineId = 4


class App extends Component {
  constructor(props) {
    super(props)
    shrineId = props.match.params.id
    this.state = {
      shrine: {},
      offerings: [],
      back: {},
      items: [],
      mouseMode: 'select'
    }
  }

  render() {
    return (
      <div className="App">
        <Editbar
          items={this.state.items}
          updateMouseMode={this.updateMouseMode}
          addOffering={this.addOffering}
        />
        <Navbar />
        <Doors />
        <Shrine
          updateCoordinates={this.updateCoordinates}
          shrine={this.state.shrine}
          offerings={this.state.offerings}
          mouseMode={this.state.mouseMode}
        />
        <Floor />
        {!!this.state.back.video ? <Background back={this.state.back.video}/> : null}
      </div>
    );
  }

  componentWillMount() {
    this.loadShrine()
    this.loadItems()
  }

  //////////////////////////////////

  loadShrine = () => {
    fetch(`${apiURL}/api/v1/shrines/${shrineId}`)
    .then(res => res.json())
    .then(shrine => {
      this.setState({
        shrine: shrine,
        offerings: shrine.offerings,
        back: shrine.back
      })
    })
  }

  loadItems = () => {
    fetch(`${apiURL}/api/v1/items`)
    .then(res => res.json())
    .then(items => {
      this.setState({
        items: items
      })
    })
  }

  addOffering = (item) => {
    fetch(`${apiURL}/api/v1/offerings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        shrine_id: this.state.shrine.id,
        item_id: item.id,
        style: `{"top":"40%","left":"40%"}`
      })
    }).then(this.loadShrine())
  }

  updateCoordinates = (offeringId, posX, posY) => {
    fetch(`${apiURL}/api/v1/offerings/${offeringId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        style: `{"top":${posY},"left":${posX}}`
      })
    })
  }

  updateMouseMode = (mode) => {
    this.setState({
      mouseMode: mode
    })
  }
}

export default App;
