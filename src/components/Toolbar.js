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
      'move',
      'delete',
      'up',
      'down',
      'top',
      'bottom',
    ]
    // const mouseModes = [
    //   {
    //     mode: 'select',
    //     buttonName: 'Select'
    //   },
    //   {
    //     mode: 'delete',
    //     buttonName: 'Delete'
    //   },
    //   {
    //     mode: 'up',
    //     buttonName: 'Move up'
    //   },
    //   {
    //     mode: 'down',
    //     buttonName: 'Move down'
    //   }
    // ]
    return mouseModes.map(m => {
      return (
        <li
          key={m}
        >
          <img
            src={`../../assets/img/${m}.png`}
            name={m}
            alt={m}
            onClick={this.handleClick}
          />
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
