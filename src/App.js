import React, { Component } from 'react';
import Doors from './components/Doors';
import Shrine from './containers/Shrine';
import Floor from './components/Floor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Editbar from './components/Editbar';
import ErrorPage from './components/ErrorPage';

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
      back: {},
      items: [],
      mouseMode: 'move',
      shrineExists: true
    }
  }

  render() {
    if (this.state.shrineExists) {
      return (
        <div className="App">
          <Editbar
            items={this.state.items}
            updateMouseMode={this.updateMouseMode}
            createOffering={this.createOffering}
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
          {!!this.state.back.video ? <Background back={this.state.back.video}/> : null}
        </div>
      )
    }
    else {
      return (
        <ErrorPage />
      )
    }
  }

  componentDidMount() {
    this.loadShrine()
    this.loadItems()
    window.addEventListener('keydown', this.handleKeyDown)
  }

  //////////////////////////////////

  loadShrine = () => {
    fetch(`${apiURL}/api/v1/shrines/${shrineId}`)
    .then(res => res.json())
    .then(shrine => {
      if (shrine) {
        this.loadShrineOfferings(shrine)
      }
      else {
        this.setState({
          shrineExists: false
        })
      }
    })
  }

  loadShrineOfferings = (shrine) => {
    this.setState({
      shrine: shrine,
      offerings: shrine.offerings,
      back: shrine.back
    }, () => this.arrangeOfferingsByZIndex(this.state.offerings))
  }

  handleKeyDown = (e) => {
    switch (e.key) {
      case 'v':
        this.updateMouseMode('move')
        break;
      case 'x':
        this.updateMouseMode('delete')
        break;
      case 'ArrowUp':
        this.updateMouseMode('up')
        break;
      case 'ArrowDown':
        this.updateMouseMode('down')
        break;
      case 'ArrowRight':
        this.updateMouseMode('top')
        break;
      case 'ArrowLeft':
        this.updateMouseMode('bottom')
        break;
      default:
        break;
    }
  }

  arrangeOfferingsByZIndex = (offerings) => {
    let newOfferings = [...offerings]

    // sort offerings array by z index
    newOfferings = newOfferings.sort((a, b) => {
      return a.zIndex - b.zIndex
    })

    newOfferings.forEach((o, i) => {
      // if any offerings don't have z index, set them
      o.zIndex = i
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

  createOffering = (item) => {
    fetch(`${apiURL}/api/v1/offerings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        shrine_id: this.state.shrine.id,
        item_id: item.id,
        style: `{"top":"40%","left":"40%"}`,
        zIndex: this.state.offerings.length
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
      console.log(o.zIndex);
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
    const newOfferings = [...this.state.offerings]
    const offeringIndex = newOfferings.indexOf(offering)

    // if not at top
    if (offeringIndex !== newOfferings.length - 1) {
      // switch indices=
      const zIndex1 = newOfferings[offeringIndex].zIndex
      const zIndex2 = newOfferings[offeringIndex + 1].zIndex

      newOfferings[offeringIndex + 1].zIndex = zIndex1
      newOfferings[offeringIndex].zIndex = zIndex2

      this.arrangeOfferingsByZIndex(newOfferings)
    }
  }

  moveDown = (offering) => {
    const newOfferings = [...this.state.offerings]
    const offeringIndex = newOfferings.indexOf(offering)

    // if not at bottom
    if (offeringIndex !== 0) {
      // switch indices=
      const zIndex1 = newOfferings[offeringIndex].zIndex
      const zIndex2 = newOfferings[offeringIndex - 1].zIndex

      newOfferings[offeringIndex - 1].zIndex = zIndex1
      newOfferings[offeringIndex].zIndex = zIndex2

      this.arrangeOfferingsByZIndex(newOfferings)
    }
  }

  moveTop = (offering) => {
    const newOfferings = [...this.state.offerings]
    const offeringIndex = newOfferings.indexOf(offering)

    // if not at top
    if (offeringIndex !== newOfferings.length - 1) {
      // switch indices=
      // const zIndex1 = newOfferings[offeringIndex].zIndex
      // const zIndex2 = newOfferings[newOfferings.length - 1].zIndex
      //
      // newOfferings[newOfferings.length - 1].zIndex = zIndex1
      newOfferings[offeringIndex].zIndex = newOfferings.length

      this.arrangeOfferingsByZIndex(newOfferings)
    }
  }

  moveBottom = (offering) => {
    const newOfferings = [...this.state.offerings]
    const offeringIndex = newOfferings.indexOf(offering)

    // if not at bottom
    if (offeringIndex !== 0) {
      // switch indices=
      // const zIndex1 = newOfferings[offeringIndex].zIndex
      // const zIndex2 = newOfferings[0].zIndex
      //
      // newOfferings[0].zIndex = zIndex1
      newOfferings[offeringIndex].zIndex = -1

      this.arrangeOfferingsByZIndex(newOfferings)
    }
  }
}

export default App;
