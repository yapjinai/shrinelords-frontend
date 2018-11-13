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

  componentDidMount() {
    console.log('hi');
    document.addEventListener('keyDown', this.handleKeyDown)
  }

  //////////////////////////

  displayMouseModeButtons = () => {
    // const mouseModes = [
    //   'move',
    //   'delete',
    //   'up',
    //   'down',
    //   'top',
    //   'bottom',
    // ]
    const mouseModes = [
      {
        mode: 'move',
        buttonName: 'Move'
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
      },
      {
        mode: 'top',
        buttonName: 'Move to top'
      },
      {
        mode: 'bottom',
        buttonName: 'Move to bottom'
      },
    ]
    return mouseModes.map(m => {
      return (
        <li
          key={m.mode}
        >
          <img
            src={`../../assets/img/${m.mode}.png`}
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

  handleKeyDown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case 'm':
        console.log('hi');
        break;
      default:
        break;
    }
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
