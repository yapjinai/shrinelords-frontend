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
          <li>
            <button>Send backwards</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Toolbar
