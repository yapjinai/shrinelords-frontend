import React, { Component } from 'react'
import '../assets/css/Toolbar.css'

class Toolbar extends Component {
  render() {
    return(
      <div className="Toolbar">
        TOOLS
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
        mode: 'select',
        buttonName: 'Select'
      },
      {
        mode: 'delete',
        buttonName: 'Delete'
      },
      {
        mode: 'up',
        buttonName: 'Move up'
      },
      {
        mode: 'down',
        buttonName: 'Move down'
      }
    ]
    return mouseModes.map(m => {
      return (
        <li
          key={m.mode}
        >
          <button
            name={m.mode}
            onClick={this.handleClick}
          >
            {m.buttonName}
          </button>
        </li>
      )
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.updateMouseMode(e.target.name)
  }
}

export default Toolbar
