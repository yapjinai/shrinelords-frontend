import React, { Component } from 'react';
import Doors from './components/Doors';
import Shrine from './containers/Shrine';
import Floor from './components/Floor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Editbar from './components/Editbar';

import './assets/css/App.css'

const apiURL = 'http://localhost:3000'
let shrineId

class App extends Component {
  constructor(props) {
    super(props)
    shrineId = props.match.params.id
    this.state = {
      shrine: {},
      offerings: [],
      items: [],
      mouseMode: 'up'
    }
  }

  render() {
    // console.table(this.state.offerings.map(o => {
    //   return `${o.id}, ${o.zIndex}`
    // }));
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
          deleteOffering={this.deleteOffering}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          moveTop={this.moveTop}
          moveBottom={this.moveBottom}
        />
        <Floor />
        <Background />
      </div>
    );
  }

  componentDidMount() {
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
        offerings: shrine.offerings
      }, () => this.arrangeOfferingsByZIndex())
    })
  }

  arrangeOfferingsByZIndex = () => {
    const newOfferings = [...this.state.offerings]

    // sort offerings array by z index
    newOfferings.sort((a, b) => {
      return a.zIndex - b.zIndex
    })

    newOfferings.forEach((o, i) => {
      // if any offerings don't have z index, set them
      o.zIndex = i

      // update DOM
      // console.log(o);
    })

    this.updateDatabaseZIndex(newOfferings)
    this.updateStateZIndex(newOfferings)
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
    })
    .then(() => this.loadShrine())
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

  //////////////

  updateDatabaseZIndex = (newOfferings) => {
    // update database
    newOfferings.forEach(o => {
      fetch(`${apiURL}/api/v1/offerings/${o.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          zIndex: o.zIndex
        })
      })
      .then(r => r.json())
      // .then(console.log)
    })
  }

  updateStateZIndex = (newOfferings) => {
    // update state
    this.setState({
      offerings: newOfferings
    })
  }

  ///////////
  // TOOLBAR ACTIONS
  ///////////

  updateMouseMode = (mode) => {
    this.setState({
      mouseMode: mode
    })
  }

  deleteOffering = (offering) => {
    fetch(`http://localhost:3000/api/v1/offerings/${offering.id}`, {
      method: 'DELETE'
    })
    .then(() => this.loadShrine())
  }

  moveUp = (offering) => {
    console.log(offering.zIndex);

    const newOfferings = [...this.state.offerings]
    const offeringIndex = newOfferings.indexOf(offering)

    // if not at top
    if (offeringIndex !== newOfferings.length - 1) {
      // switch indices
      newOfferings[offeringIndex + 1] = offering
      newOfferings[offeringIndex] = this.state.offerings[offeringIndex + 1]

      this.updateDatabaseZIndex(newOfferings)
      this.updateStateZIndex(newOfferings)

      this.arrangeOfferingsByZIndex()
    }
  }
}

export default App;

/// TO DO: prevent vertical scrolling
