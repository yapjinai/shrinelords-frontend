import React, { Component,PureComponent } from 'react'
import '../assets/css/Leftbar.css'

export default class Leftbar extends Component {

  state = {
    className: 'hidden-leftbar'
  }

  toggle = () => {
    let newState
    if (this.state.className === 'hidden-leftbar') {
      newState = 'leftbar'
    }
    else {
      newState = 'hidden-leftbar'
    }
    this.setState({
      className: newState
    })
  }

  render(){
    return (
      <div
        className={this.state.className}
        onMouseOver={this.toggle}
        onMouseOut={this.toggle}
      >
      </div>
    )
  }
}
