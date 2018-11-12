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
        mode: 'delete',
        buttonName: 'Delete'
      },
      {
        mode: 'forwards',
        buttonName: 'Bring forwards'
      },
      {
        mode: 'backwards',
        buttonName: 'Send backwards'
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
