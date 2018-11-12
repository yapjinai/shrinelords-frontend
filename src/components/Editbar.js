import React, { Component } from 'react'
import '../assets/css/Editbar.css'
import Itembar from './Itembar'
import Toolbar from './Toolbar'

export default class Editbar extends Component {
  render() {
    return (
      <div className="Editbar" onClick={this.toggle}>
        <Itembar
          items={this.props.items}
        />
        <Toolbar />
      </div>
    )
  }

///////////////////////////////////////

}
