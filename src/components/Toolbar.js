import React, { Component } from 'react'
import '../assets/css/Toolbar.css'

class Toolbar extends Component {
  render() {
    return(
      <div className="Toolbar">
        TOOLS
        <ul>
          <li>
            <button>Delete</button>
          </li>
          <li>
            <button>Bring forwards</button>
          </li>

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
        <li>
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
