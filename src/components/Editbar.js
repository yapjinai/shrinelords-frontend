import React, { Component } from 'react'
import '../assets/css/Editbar.css'
import EditbarItem from './EditbarItem'
// import Toolbar from './Toolbar'

export default class Editbar extends Component {

  constructor() {
    super()
    this.state = {
      shown: true
    }
  }

  render() {
    if(this.state.shown){
      return (
        <div className="Editbar" onClick={this.toggle}>
          {this.displayItems()}
          {this.displayItems()}
          {this.displayToolbar()}
        </div>
      )}
    else {
      return (
        <div
          className="Editbar Editbar-hidden"
          onClick={this.toggle}
        >
        </div>
      )
      }
  }

///////////////////////////////////////

  toggle = (event) => {
    if(!(event.target.attributes.getNamedItem("src"))){
    this.setState({shown: !this.state.shown})}
  }

  displayItems = () => {
    return this.props.items.map(item => {
      return (
        <EditbarItem key={1000+item.id} item={item} />
      )
    })
  }

  displayToolbar = () => {
    return (
      // <Toolbar />
      null
    )
  }
}
