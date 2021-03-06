import React, { Component } from 'react'
import '../assets/css/Toolbar.css'

class Toolbar extends Component {
  render() {
    return(
      <div className="Toolbar">
        <ul>
          {this.displayMouseModeButtons()}
        </ul>
      </div>
    )
  }

  //////////////////////////

  displayMouseModeButtons = () => {
    const mouseModes = [
      {
        mode: 'move',
        buttonName: 'Move (V)'
      },
      {
        mode: 'delete',
        buttonName: 'Delete (X)'
      },
      {
        mode: 'up',
        buttonName: 'Move up (↑)'
      },
      {
        mode: 'top',
        buttonName: 'Move to top (→)'
      },
      {
        mode: 'down',
        buttonName: 'Move down (↓)'
      },
      {
        mode: 'bottom',
        buttonName: 'Move to bottom (←)'
      }
    ]
    return mouseModes.map(m => {
      return (
        <li
          key={m.mode}
        >
          <img
            src={`../../assets/img/tools/${m.mode}-icon.png`}
            name={m.mode}
            alt={m.buttonName}
            onClick={this.handleClick}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          />
          <div
            className={`info`}
          >
            {m.buttonName}
          </div>
        </li>
      )
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.updateMouseMode(e.target.name)
  }

  handleMouseOver = (e) => {
    const infoDiv = e.target.nextSibling
    infoDiv.classList.add('display')
  }

  handleMouseOut = (e) => {
    const infoDiv = e.target.nextSibling
    infoDiv.classList.remove('display')
  }
}

export default Toolbar
