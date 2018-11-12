import React, { Component } from 'react'
import '../assets/css/Editbar.css'
import Itembar from './Itembar'
import Toolbar from './Toolbar'

export default class Editbar extends Component {

  constructor() {
    super()
    this.state = {
      shown: false
    }
  }

  render() {
    if(this.state.shown){
      return (
        <div className="Editbar" onClick={this.toggle}>
          <Itembar
            items={this.props.items}
          />
          <Toolbar />
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
    // console.log(event.target.attributes)
    // if(!(event.target.attributes.getNamedItem("src"))){
      this.setState({
        shown: !this.state.shown
      })
    // }
  }

}
